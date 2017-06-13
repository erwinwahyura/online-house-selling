var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors')

mongoose.connect('mongodb://localhost/online-house-selling');
// mongoose.connect('mongodb://<erwinwahyura>:<dbpassword>@ds121222.mlab.com:21222/lab-hactiv8-overflow');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection success!!!');
});

var index = require('./routes/index');

var app = express();
app.use(cors())

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

app.listen(3000)

module.exports = app;
