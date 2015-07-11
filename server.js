/**
 * Created by corey_000 on 6/6/2015.
 */

require('dotenv').load();

var express = require('express');
var app = express();
var utilities = require('./utilities.js');

// Environment Configurations

var path = require('path');
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.use(expressLayouts);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

// Development
if (process.env.ENVIRONMENT == 'dev') {
    console.log("Running in development environment");
}

// Production
if (process.env.ENVIRONMENT == 'prod') {
    console.log("Running in production environment");
}

// Routing
home = require('./routes/home.js');
upload = require('./routes/upload.js');
app.get('/', function(req, res) {
    res.redirect('/home');
});
app.get('/home', home.index);
app.get('/upload', utilities.basicAuth, upload.new);

// Port
app.listen(8080);
console.log("App listening on port 8080.");
