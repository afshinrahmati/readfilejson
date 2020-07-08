const express = require('express');
let app = express();
const path = require('path')
const adres = require('./admin')
const ader = require('./user')
app.listen(4600)
console.log("ok");
const route = require('./name.json')


const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ 'extended': 'true' }));
app.use(bodyparser.json());
app.use(bodyparser.json({ 'type': 'application/vnd.api+json' }));

app.use('/user', ader)
app.use('/admin', adres)