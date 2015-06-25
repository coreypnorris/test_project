/**
 * Created by corey_000 on 6/6/2015.
 */

var express = require('express');
var app = express();
var utils = require('./utilities.js');

// Environment Configurations
require('dotenv').load();

var sass    = require('node-sass');
var bourbon = require('node-bourbon');
sass.render({
    file: './application.scss',
    success: function(css){
        console.log(css);
    },
    error: function(error) {
        console.log(error);
    },
    includePaths: bourbon.with('./public/scss_files/custom_styles.scss')
});

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
var basicAuth = require('basic-auth');
var auth = function (req, res, next) {
    function unauthorized(res) {
        res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
        return res.sendStatus(401);
    }
    var user = basicAuth(req);
    if (!user || user.name !== process.env.BASIC_AUTH_USERNAME || user.pass !== process.env.BASIC_AUTH_PASSWORD) {
        return unauthorized(res);
    } else {
        next();
    }
};

home = require('./routes/home.js');
upload = require('./routes/upload.js');
app.get('/', function(req, res) {
    res.redirect('/home');
});
app.get('/home', home.index);
app.get('/upload', auth, upload.new);

// Port
app.listen(3000);
console.log("App listening on port 3000.");
