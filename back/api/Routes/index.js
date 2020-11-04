const router = require("express").Router();
const { User, Product } = require('../Models/index');
const passport = require("passport");


router.post('/users', (req, res) => {
    User.create(req.body)
        .then((users) => {
        res.send(users)
    })
})

router.get('/users', (req, res) => {
    User.findAll()
        .then((users) => {
        res.send(users)
    })
})

router.get('/products', (req, res) => {
    Product.findAll()
        .then((product) => {
        res.send(product)
    })
})


router.post('/register', (req, res) => {
    User.create(req.body)
        .then((users) => {
        res.send(users)
    })
})


router.post('/login', passport.authenticate("local"), (req,res) => {
        console.log("Estás logueado!")
        res.send(req.user)
})


router.post("/logout", (req, res) => {
    console.log("Te deslogueaste!")
    req.logOut();
    res.sendStatus(200);
});


module.exports = router