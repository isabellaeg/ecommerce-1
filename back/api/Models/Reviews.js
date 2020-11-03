const Sequelize = require("sequelize");
const db = require("../db/db");

class Review extends Sequelize.Model {}

Review.init(
  {
    comment: {
      type: Sequelize.TEXT,
    },
    rate: {
      type: Sequelize.INTEGER,
    }
  },
  { sequelize: db, modelName: "Review" }
);

module.exports = Review;
