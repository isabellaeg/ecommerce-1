const Sequelize = require("sequelize");
const db = require("../db/db");

class CartProductQuant extends Sequelize.Model {}

CartProductQuant.init(
  {
    quantity: {
      type: Sequelize.INTEGER,
    },
  },
  { sequelize: db, modelName: "CartProductQuant" }
);

module.exports = CartProductQuant;
