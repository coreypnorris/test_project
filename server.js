/**
 * Created by corey_000 on 6/6/2015.
 */

require('dotenv').load();
var express = require('express');
var app = express();
var fs = require('fs');
app.set('fs', fs);
var utilities = require('./utilities.js');
app.set('utilities', utilities);


// Environment Configurations
utilities.initializeSass();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.use(expressLayouts);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.ENVIRONMENT == 'dev') {
  app.set('dev_env', 'Running in development environment');
  console.log("Running in development environment");
}
else if (process.env.ENVIRONMENT == 'prod') {
  app.set('prod_env', 'Running in prod environment');
  console.log("Running in production environment");
}

// Database Setup
var sqlite_interface = require('./db/sqlite_interface.js');
app.set('sqlite_interface', sqlite_interface);
var db = sqlite_interface.getDatabase();
var schema = fs.readFileSync('./schema.sql').toString();
sqlite_interface.createSchema(db, schema);

// Routing
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Home routes
homeRoutes = require('./routes/home.js');
app.get('/', function(req, res) {
    res.redirect('/home');
});
app.get('/home', homeRoutes.index);

// Comics routes
comicsRoutes = require('./routes/comics.js');
app.get('/comics/new', utilities.basicAuth, comicsRoutes.new);
app.post('/comics/create', utilities.basicAuth, comicsRoutes.create);
app.get('/comics/edit', utilities.basicAuth, comicsRoutes.edit);

// Api routes
apiRoutes = require('./routes/api.js');
app.get('/api/comments/', apiRoutes.comments);


// Port
app.listen(8080);
console.log("App listening on port 8080.");
