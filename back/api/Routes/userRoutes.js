const userRouter = require("express").Router();
const passport = require("passport");

const {User, Product, Cart, CartProductQuant } = require("../Models/index");
const S = require("sequelize");

userRouter.post("/users", (req, res) => {
    User.create(req.body).then((users) => {
      res.send(users);
    });
  });
  
  userRouter.get("/users", (req, res) => {
    User.findAll().then((users) => {
      res.send(users);
    });
  });
  
  module.exports = userRouter