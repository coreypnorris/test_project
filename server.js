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
if ('development' == app.get('env')) {
    app.set('dev_env', 'Running in development environment');
    var dev_db = require('./db/dev_db.js')
    dev_db.createDatabase
}

// Production
if ('production' == app.get('env')) {
    app.set('prod_env', 'Running in production environment');
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
app.listen(3000);
console.log("App listening on port 3000.");
