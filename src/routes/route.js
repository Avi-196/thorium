let obj=require('../logger/logger.js')
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    obj.Myfunction('welcome to myapplication i am avinay mishra and i am part of functionup thorium')
    console.log(obj.Myurl)
});

module.exports = router;