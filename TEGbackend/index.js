var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var appRoutes = require('./routes/appRoutes');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


 
mongoose.connect('mongodb://localhost/tegSample3' );

http.createServer(app).listen(port);
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.use('/',appRoutes);


console.log("backend running on port :" ,port);