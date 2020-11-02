const express = require("express");
const parser = require("body-parser");
const db = require('./api/db/db')
const app = express();
const routes = require('./api/Routes')

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use('/api', routes)

db.sync({ force: false }).then(() => {
    app.listen(3000, () => console.log("listening on 3000..."));
  });

module.exports = app;
