const express = require('express');
const router = express.Router();
const { User } = require("../models/user");

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;

    const data = {
        name: name,
        email: email,
        password: password
    };

    try {
        const check = await User.findOne({ email: email });
        console.log(check)
        if (check) {
            res.json("Email already used");
        } else {
            res.json("Welcome!");
            await User.create([data]);
        }
    } catch (e) {
        console.error('Error:', e);
        res.status(500).json("Internal Server Error");
    }
});

module.exports = router;