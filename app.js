/**
 * Created by corey_000 on 6/6/2015.
 */

var express = require('express');
var app = express();

// Environment Configurations
require('dotenv').load();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.use(expressLayouts);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

var basicAuth = require('basic-auth');
var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    }
    var user = basicAuth(req);
    if (!user || !user.name || !user.pass) {
        return unauthorized(res);
    }
    if (user.name === process.env.BASIC_AUTH_USERNAME && user.pass === process.env.BASIC_AUTH_PASSWORD) {
        return next();
    } else {
        return unauthorized(res);
    }
};

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
app.get('/', function(req, res) {
    res.redirect('/home')
});
app.get('/home', home.index);

upload = require('./routes/upload.js');
app.get('/upload', auth, upload.new);


// Port
app.listen(3000);
console.log("App listening on port 3000.");
