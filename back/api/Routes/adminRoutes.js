const adminRouter = require("express").Router();

const {User, Product, Cart, CartProductQuant } = require("../Models/index");
const S = require("sequelize");

// userRouter.post("/users", (req, res) => {
//     User.create(req.body).then((users) => {
//       res.send(users);
//     });
//   });
  
  adminRouter.get("/users", (req, res) => {
    User.findAll().then((users) => {
        console.log("USERS ADMIN", users)
      res.send(users);
    });
  });

  adminRouter.put("/users/destroy", (req, res) => {
    User.destroy({
      where: {
        id: req.body.user.id,
      },
    })
    .then(() => res.sendStatus(200));
  });  
  
  adminRouter.put("/users/rol", (req, res) => {
    User.update({isAdmin: "Admin"},{
      where: {
        id: req.body.user.id,
      },
    })
    .then(() => res.sendStatus(200));
  });  



  // RUTAS PARA PRODUCTOS

  adminRouter.get("/products", (req, res) => {
    Product.findAll().then((product) => {
        //console.log("USERS ADMIN", users)
      res.send(product);
    });
  });

  adminRouter.put("/products/destroy", (req, res) => {
    Product.destroy({
      where: {
        id: req.body.product.id,
      },
    })
    .then(() => res.sendStatus(200));
  }); 

  adminRouter.post('/newproducts', (req,res)=>{
    console.log(req.body.product)

    Product.create(req.body.product).then(()=>{
      res.sendStatus(201)
    })
  })

  module.exports = adminRouter