const express = require('express')
const router = express.Router();
const path = require("path");
const fs = require('fs');


router.get('/getAllUsers', function(req, res) {
    let rawdata = fs.readFileSync('name.json');
    let student = JSON.parse(rawdata);
    let us1 = student.name;
    res.render(path.join(__dirname, './html.ejs'), { img: us1 })
})

router.get('/to.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, "./to.jpg"))
})


module.exports = router;