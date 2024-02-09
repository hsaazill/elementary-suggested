const express = require('express')
const router = express.Router()
const { User } = require('../models/user')

router.post('/', async (req, res) => {
    const { email, password } = req.body

    try {
        const check = await User.findOne({ email: email });
        if (check.email === email && check.password === password) {
            res.json("User Confirmed")
        } else {
            res.json("Email not registered")
        }
    } catch (error) {
        res.json("Email not registered")
    }
})

module.exports = router;
