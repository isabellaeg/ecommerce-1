const router = require("express").Router();
const passport = require("passport");

const { User, Product, Cart, CartProductQuant } = require("../Models/index");
const S = require("sequelize");
const cartRouter = require("./cartRoutes");
const userRouter = require("./userRoutes")

router.use("/cart", cartRouter)
router.use("/users", userRouter)


router.get("/allproducts", (req, res) => {
  Product.findAll().then((product) => {
    res.send(product);
  });
});

router.get("/products/:stringBusqueda", (req, res) => {
  Product.findAll({
    where: {
      name: {
        [S.Op.iLike]: "%" + req.params.stringBusqueda + "%",
      },
    },
  }).then((ArrayProduct) => {
    res.send(ArrayProduct);
  });
});

router.get("/singleproduct/:id", (req, res) => {
  console.log("en el product/id");
  Product.findByPk(req.params.id).then((singleProduct) => {
    console.log(singleProduct);
    res.send(singleProduct);
  });
});

router.post("/register", (req, res) => {
  User.create(req.body).then((users) => {
    res.send(users);
  });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log("Estás logueado!");
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  console.log("Te deslogueaste!");
  req.logOut();
  res.sendStatus(200);
});

router.put("/checkout", (req, res) => {
  console.log("CHECKOUT", req.body);
  Cart.update(
    {
      address: req.body.address,
      cardNumber: req.body.card,
      cardCvv: req.body.cvv,
      date: Date.now(),
      isPaid: true,
    },
    { where: { UserId: req.body.user.id, isPaid: false } }
  ).then((cart) => {
    res.sendStatus(201);
  });
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
