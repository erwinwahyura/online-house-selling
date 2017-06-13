var express = require('express')
var bodyparser = require('body-parser')
var index = require('./routes/index')
var app = express()

app.use('index', index)

var port = 3000

app.listen('you are listening on port' + port)

module.exports = app
