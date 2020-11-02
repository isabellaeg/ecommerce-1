const Cart = require('./Cart')
const Product = require('./Product')
const User = require('./User')

Cart.belongsTo(User)
/* Product.belongsToMany(Cart) */ //REQUIRE THROUGH

module.exports = {Cart, Product, User}