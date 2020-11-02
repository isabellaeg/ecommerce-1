const express = require("express");
const parser = require("body-parser");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static("public"));

    app.listen(3000, ()=>{
    console.log('escuchando en puerto 3000')
})



module.exports = app;