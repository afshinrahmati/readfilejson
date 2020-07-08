const express = require('express')
const roue = express.Router();
const path = require("path");
const fs = require('fs');

roue.post('/getUser', function(req, res) {
    let p = []
    let rawdata = fs.readFileSync('name.json');
    let student = JSON.parse(rawdata);
    let us1 = student.name;
    p.push(us1);

    req.body.name = "amir1";

    for (let i = 0; i < us1.length; i++) {
        console.log(us1[i]);


        if (req.body.name == us1[i]) {
            res.send('are in list')
        } else if (req.body.name != us1[i]) {
            res.send('are in list')
        }
    }


})
module.exports = roue;