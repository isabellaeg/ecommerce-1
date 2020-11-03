const router = require("express").Router();
const { User, Product } = require('../Models/index')

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


module.exports = router