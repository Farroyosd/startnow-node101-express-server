// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var data = require('./data.json');
var path = require('path');



// create your express server below
var app = express();
app.use(express.static(path.join(__dirname, './public/')));
app.get('/', function(req, res){
    res.send('ok');
});

app.get('/data', function (req, res){
    res.json(data);
});



// add your routes and middleware below
app.use(morgan('dev'));

// finally export the express application
module.exports = app;
