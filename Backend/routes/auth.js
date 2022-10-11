const express = require('express');
const user = require("../models/User");
const router = express.Router();

router.post('/', (req, res) => {
    res.send(req.body);
    const userModel = new user(req.body);
    userModel.save();
})

module.exports = router