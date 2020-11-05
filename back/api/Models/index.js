const Cart = require("./Cart");
const Product = require("./Product");
const User = require("./User");
const Review = require("./Reviews");
const Category = require("./Category");
const CartProductQuant = require("./CartProductQuant");

//Relaciones entre tablas
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: CartProductQuant });
Cart.belongsToMany(Product, { through: CartProductQuant });
Review.belongsTo(User);
Review.belongsTo(Product);
Product.belongsToMany(Category, { through: "CategoryProduct" });
Category.belongsToMany(Product, { through: "CategoryProduct" });

module.exports = { Cart, Product, User, Review, Category, CartProductQuant };
