const Cart = require("./Cart");
const Product = require("./Product");
const User = require("./User");
const Review = require("./Reviews");
const Category = require("./Category");

//Relaciones entre tablas
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: 'CartProduct' });
Cart.belongsToMany(Product, { through: 'CartProduct' });
Review.belongsTo(User);
Review.belongsTo(Product);
Product.belongsToMany(Category, { through: 'CategoryProduct' });
Category.belongsToMany(Product, { through: 'CategoryProduct' });

module.exports = { Cart, Product, User, Review, Category };
