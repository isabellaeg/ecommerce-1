const router = require("express").Router();
const passport = require("passport");

const { User, Product, Cart, CartProductQuant } = require("../Models/index");
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

/* router.post("/cart/:userId/:productId", (req, res) => {
  Cart.findAll({
    where: {
      UserId: req.params.userId,
    },
  }).then((cart) => {
    console.log("carro buscado", cart);
    console.log("req.params.userId", req.params.userId);
    if (cart.length === 0) {
      Cart.create({ UserId: 1 }).then(() => {
        console.log("carro Creado");
      });
    }
  });
}); */

router.post("/cart", (req, res) => {
  Cart.findAll({
    where: {
      UserId: req.body.user.id,
      isPaid: false,
    },
    include: [{ model: Product }],
  }).then((cart) => {
    //Si no hay carro creo uno
    if (cart.length === 0) {
      Cart.create({
        UserId: req.body.user.id,
      }).then((newCart) => {
        CartProductQuant.create({
          quantity: 1,
          ProductId: req.body.product.id,
          CartId: req.body.user.id,
        });
        res.send(newCart);
      });
      //Si ya tiene carro agregá productos
    } else {
      CartProductQuant.findAll({
        where: {
          CartId: cart[0].id,
          ProductId: req.body.product.id,
        },
      }).then((cartQuant) => {
        cartQuant[0].increment("quantity");
      });
    }
  });
});

router.put("/cart", (req, res) => {
  Cart.findAll({
    where: {
      UserId: req.body.user.id,
      isPaid: false,
    },
    include: [{ model: Product }],
  }).then((cart) => {
    CartProductQuant.findAll({
      where: {
        CartId: cart[0].id,
        ProductId: req.body.product.id,
      },
    }).then((cartQuant) => {
      cartQuant[0].increment("quantity");
    });
  });
});

router.get("/cart/:userId", (req, res) => {
  Cart.findAll({
    where: {
      UserId: req.params.userId,
    },
    include: [{ model: Product }],
  }).then((cart) => {
    res.send(cart[0]);
  });
});

/* router.get("/cart", (req, res) => {
  Cart.findAll({
    where: {
      UserId: 100,
    },
    include: [{ model: Product }],
  }).then((cart) => {
    console.log("cart", cart);
    res.send(cart);
  });
}); */

router.get("/me", (req, res) => {
  if (!req.user) {
    return res.sendStatus(401);
  }
  res.send(req.user);
});

module.exports = router;
