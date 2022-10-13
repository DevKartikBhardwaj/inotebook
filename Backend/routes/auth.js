const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = "kartik is a G00d b0$y";


// Create a User using: POST "/api/auth/". Doesn't require Auth
//Validation using express validator
router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    //if there are errors retrun bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    //check whether the user exists already
    try {
        let users = await User.findOne({ email: req.body.email });
        if (users) {
            return res.status(400).json({ error: "sorry a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        let userz = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        })


        //JWT(javacript web tokens specific thing)

        const data = {
            user: {
                id: userz.id
            }
        }

        const authToken = jwt.sign(data, JWT_SECRET);

        res.json(authToken);
    } catch (err) {
        console.log(err);
        res.status(500).send("some error occured");
    }

})

module.exports = router