const Sequelize = require("sequelize");
const db = require("../db/db");
const bcrypt = require("bcrypt");

const User = db.define('Users', 
  {
    nickname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    password: {
      type: Sequelize.STRING,
    },
    salt: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.ENUM({
        values: ["SuperAdmin", "Admin", "Customer"]
      }),
      defaultValue: "Customer",
    },
  }
);

User.beforeCreate((user) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.hash(user.password, salt);
    })
    .then((hash) => {
      user.password = hash;
    });
});

User.prototype.hash = function (password, salt) {
  return bcrypt.hash(password, salt);
};

module.exports = User;
