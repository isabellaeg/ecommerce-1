const router = require("express").Router();
const passport = require("passport");

const { User, Product } = require("../Models/index");
const S = require("sequelize");

router.post("/users", (req, res) => {
  User.create(req.body).then((users) => {
    res.send(users);
  });
});

router.get("/users", (req, res) => {
  User.findAll().then((users) => {
    res.send(users);
  });
});

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

  /* Product.findAll({
    where: { id: req.params.id },
  }).then((singleProduct) => {
    res.send(singleProduct);
  }); */
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

module.exports = router;
