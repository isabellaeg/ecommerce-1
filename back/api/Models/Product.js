const Sequelize = require("sequelize");
const db = require("../db/db");

class Product extends Sequelize.Model {}

Product.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      /* get() {
        this.name.toLowerCase();
      }, */
    },
    stock: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
    },
    price: {
      type: Sequelize.DOUBLE,
      defaultValue: 0,
      allowNull: false,
    },
    imgUrl: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.TEXT,
    },
  },
  { sequelize: db, modelName: "Product" }
);

module.exports = Product;
