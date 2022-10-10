const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const obj = {
        this: 'a',
        a: 2
    }
    res.json(obj);
})

module.exports = router