const adminRouter = require("express").Router();

const {User, Product, Cart, CartProductQuant, Category, CategoryProduct } = require("../Models/index");
const S = require("sequelize");

// userRouter.post("/users", (req, res) => {
//     User.create(req.body).then((users) => {
//       res.send(users);
//     });
//   });
  
  adminRouter.get("/users", (req, res) => {
    User.findAll({
      where: {
        isAdmin: {
          [S.Op.ne]:"SuperAdmin"
        } 
      }
    }).then((users) => {
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
    let newRole = ""
    if (req.body.rol == "Admin") {
      newRole = "SuperAdmin"
    } else if (req.body.rol == "Customer"){
      newRole = "Admin"
    }
    User.update({isAdmin: newRole},{
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
   Product.create(req.body.product)
   .then((product)=>{
     product.addCategory(req.body.category.category)
    }).then(()=> res.sendStatus(201))
  })

  adminRouter.put("/products/:id", (req, res) => {
    console.log("REQ BODY PUT ",)
    Product.update(req.body.product,{
      where: {
        id: req.params.id,
      },
    })
    .then(() => res.sendStatus(200));
  });  

  // RUTAS PARA CATEGORY

  adminRouter.get("/category", (req, res) => {
    Category.findAll().then((category) => {
        //console.log("USERS ADMIN", users)
      res.send(category);
    });
  });

  adminRouter.put("/category/destroy", (req, res) => {
    Category.destroy({
      where: {
        id: req.body.category.id,
      },
    })
    .then(() => res.sendStatus(200));
  }); 

  adminRouter.post('/newcategory', (req,res)=>{
    Category.create(req.body.category).then(()=>{
      res.sendStatus(201)
    })
  })

  module.exports = adminRouter