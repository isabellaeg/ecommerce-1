const router = require("express").Router();
const { User } = require('../Models/index')

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

module.exports = router