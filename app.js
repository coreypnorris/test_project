/**
 * Created by corey_000 on 6/6/2015.
 */

var express = require('express');
var app = express();

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
}

// Production
if ('production' == app.get('env')) {
    app.set('prod_env', 'Running in production environment');
}

// Routing
home = require('./routes/home.js');
app.get('/', home.index);

// Port
app.listen(3000);
