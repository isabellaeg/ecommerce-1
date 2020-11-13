const router = require("express").Router();
const passport = require("passport");
const nodemailer = require("nodemailer");
const {
  User,
  Product,
  Cart,
  CartProductQuant,
  Category,
  Review,
} = require("../Models/index");
const S = require("sequelize");
const cartRouter = require("./cartRoutes");
const userRouter = require("./userRoutes");
const adminRouter = require("./adminRoutes");

router.use("/cart", cartRouter);
router.use("/users", userRouter);
router.use("/admin", adminRouter);

router.get("/allproducts", (req, res) => {
  Product.findAll().then((product) => {
    res.send(product);
  });
});

router.get("/products", (req, res) => {
  if (req.query.search && req.query.category) {
    console.log("ENTRE AL IF");
    Product.findAll({
      where: {
        name: {
          [S.Op.iLike]: "%" + req.query.search + "%",
        },
      },
      include: [{ model: Category }],
    }).then((arrayProduct) => {
      let arrayResultado = [];
      let flag = false;
      arrayProduct.map((p) => {
        p.Categories.map((c) => {
          if (c.dataValues.name == req.query.category) {
            flag = true;
          }
        });
        if (flag == true) {
          arrayResultado.push(p);
          flag = false;
        }
      });

      res.send(arrayResultado);
    });
  } else if (!req.query.search) {
    Product.findAll({
      include: [{ model: Category }],
    }).then((arrayProduct) => {
      let arrayResultado = [];
      let flag = false;
      arrayProduct.map((p) => {
        p.Categories.map((c) => {
          if (c.dataValues.name == req.query.category) {
            flag = true;
          }
        });
        if (flag == true) {
          arrayResultado.push(p);
          flag = false;
        }
      });
      res.send(arrayResultado);
    });
  } else if (!req.query.category && req.query.search) {
    Product.findAll({
      where: {
        name: {
          [S.Op.iLike]: "%" + req.query.search + "%",
        },
      },
    }).then((ArrayProduct) => {
      res.send(ArrayProduct);
    });
  }
});

router.put("/products/avgRate/:productId", (req, res) => {
  Review.findAll({
    where: { ProductId: req.params.productId },
  })
    .then((arrayReviews) => {
      let sumRate = 0;
      arrayReviews.map((rev) => {
        sumRate = sumRate + rev.rate;
      });
      return sumRate / arrayReviews.length;
    })
    .then((avgRateRes) => {
      Product.findByPk(Number(req.params.productId)).then((prod) => {
        return prod.update({ avgRate: avgRateRes });
      });
    })
    .then(() => {
      res.sendStatus(200);
    });
});

router.get("/categories", (req, res) => {
  Category.findAll().then((c) => {
    res.send(c);
  });
});

router.get("/singleproduct/:id", (req, res) => {
  Product.findByPk(req.params.id).then((singleProduct) => {
    res.send(singleProduct);
  });
});

router.get("/reviews/:productId", (req, res) => {
  Review.findAll({
    where: { ProductId: req.params.productId },
    include: [{ model: User }, { model: Product }],
  }).then((reviews) => {
    res.send(reviews);
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
  service: "gmail",
  secure: false,
  auth: {
    user: "canalculturalp5@gmail.com",
    pass: "canalmusical",
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
    html: `Muchas gracias por tu compra, en breve un representante de atencion al cliente se comunicara contigo`,
  };
  console.log(req.body);
  Cart.update(
    {
      address: req.body.address,
      cardNumber: req.body.card,
      cardCvv: req.body.cvv,
      date: Date.now(),
      isPaid: true,
      total: req.body.total,
    },
    {
      where: { UserId: req.body.user.id, isPaid: false },
      returning: true,
      plain: true,
    }
  )
    .then((cart) => {
      return Cart.findByPk(cart[1].id, { include: [{ model: Product }] });
    })
    .then((cart) => {
      var mailOptions = {
        from: "canalculturalp5@gmail.com",
        to: `${req.body.user.email}`,
        subject: "Confirmacion de compra",
        html: `<h1>ESTO ES H1 ${cart}</h1>`,
      };
    })
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

router.get("/orders/:userid", (req, res) => {
  Cart.findAll({
    where: {
      UserId: req.params.userid,
      isPaid: true,
    },
  }).then((r) => {
    //console.log(r)
    res.send(r);
  });
});

router.get("/compras/:cartId", (req, res) => {
  Cart.findAll({
    where: {
      id: req.params.cartId,
      isPaid: true,
    },
    include: [{ model: Product }],
  }).then((cart) => {
    console.log("CART THEN", cart);
    res.send(cart[0]);
  });
});

router.post("/orders/review", (req, res) => {
  Review.create({
    comment: req.body.review.review,
    rate: req.body.review.rating,
    UserId: req.body.orders[0].UserId,
    ProductId: req.body.compras,
  }).then(() => res.sendStatus(200));
});

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
