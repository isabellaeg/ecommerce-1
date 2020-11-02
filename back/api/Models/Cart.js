const Sequelize = require("sequelize");
const db = require("../db/db");

class Cart extends Sequelize.Model {}

Cart.init(
  {
    total: {
      type: Sequelize.DOUBLE,
    },
    address: {
      type: Sequelize.STRING,
    },
    cardNumber: {
      type: Sequelize.INTEGER,
    },
    cardCvv: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
    isPaid: {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
  },
  { sequelize: db, modelName: "Cart" }
);

module.exports = Cart;
