const router = require("express").Router();
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
  console.log(req.params.stringBusqueda);
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

/* router.get("/products/:stringBusqueda", (req, res) => {
  console.log(req.params.stringBusqueda);
  Product.findAll({
    where: {
      id: 1,
    },
  }).then((ArrayProduct) => {
    console.log(ArrayProduct);
    res.send(ArrayProduct);
  });
}); */

module.exports = router;

//{[S.Op.substring] :

/* name:  [S.Op.or]: {
    [S.Op.substring]: req.params.stringBusqueda.toLowerCase(),
    [S.Op.iLike]: req.params.stringBusqueda.toLowerCase(),
}

[S.Op.or]: {
          [S.Op.substring]: req.params.stringBusqueda,
          [S.Op.iLike]: req.params.stringBusqueda,
        },

}
 */
