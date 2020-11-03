const Sequelize = require("sequelize");
const db = require("../db/db");

class Category extends Sequelize.Model {}

Category.init(
  {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  { sequelize: db, modelName: "Category" }
);

module.exports = Category;