const router = require("express").Router();
const passport = require("passport");
const nodemailer = require("nodemailer");
const { User, Product, Cart, CartProductQuant } = require("../Models/index");
const S = require("sequelize");
const cartRouter = require("./cartRoutes");
const userRouter = require("./userRoutes");

router.use("/cart", cartRouter);
router.use("/users", userRouter);

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

router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("http://localhost:4000");
  }
);

// NODEMAILER:
var transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: false,
  auth: {
    user: 'canalculturalp5@gmail.com',
    pass: 'canalmusical',
    // type: 'OAuth2',
    // clientId: '628004311754-fatbie2idm7f9ppjrrkg2lb00kp70guc.apps.googleusercontent.com',
    // clientSecret: '45b3mvplSwalOPIiauQxcEqb',
  },
  tls: { rejectUnauthorized: false },
});

router.put("/checkout", (req, res) => {
  
  var mailOptions = {
    from: "canalculturalp5@gmail.com",
    to: req.body.user.email,
    subject: "Confirmacion de compra",
    text: "Felicidades, compraste algo",
  };
  Cart.update(
    {
      address: req.body.address,
      cardNumber: req.body.card,
      cardCvv: req.body.cvv,
      date: Date.now(),
      isPaid: true,
    }
    ,
    { where: { UserId: req.body.user.id, isPaid: false },
    returning: true,
    plain: true})
    .then((cart)=>{
    return Cart.findByPk(cart[1].id, {include: [{ model: Product }]})
  })
  .then((cart) => {
    var mailOptions = {
      from: 'canalculturalp5@gmail.com',
      to: `${req.body.user.email}`,
      subject: 'Confirmacion de compra',
      text: `Felicidades, compraste algo tus productos son: ${2+2}`
    }})
    .then((cart) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
      res.sendStatus(201);
    });
  });
});

router.get('/orders/:userid', (req,res)=>{
  Cart.findAll({where: {
    UserId: req.params.userid,
    isPaid: true
  }})
  .then((r)=>{
    //console.log(r)
    res.send(r)
  })
})

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
