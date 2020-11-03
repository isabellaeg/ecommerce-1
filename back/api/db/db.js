var Sequelize = require("sequelize");

const db = new Sequelize("postgres://localhost:5432/ecommerce", {
  dialect: "postgres",
  logging: false,
});

//CONEXION PARA OSCAR

// const db = new Sequelize("postgres://localhost:5432/ecommerce", {
//   dialect: "postgres",
//   logging: false,
// });

module.exports = db;
