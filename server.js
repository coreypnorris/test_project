/**
 * Created by corey_000 on 6/6/2015.
 */

// Universal Environment Configurations
require('dotenv').load();
var express = require('express');
var app = express();
var fs = require('fs');
app.set('fs', fs);
var utilities = require('./utilities.js');
app.set('utilities', utilities);

var titleModel = require('./models/title.js');
app.set('titleModel', titleModel);

utilities.initializeSass();
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
app.set('view engine', 'ejs');
app.set('layout', 'layout');
app.use(expressLayouts);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));



// TODO: Use seige to test hammering the db
// Database Configurations
var sqlite_interface = require('./db/sqlite_interface.js');
app.set('sqlite_interface', sqlite_interface);
var db = sqlite_interface.getDatabase();
var schema = fs.readFileSync('./schema.sql').toString();
sqlite_interface.createSchema(db, schema);



// Environment Specific Configurations
var environment = process.env.ENVIRONMENT;
if (environment == 'DEVELOPMENT') {
  app.set('dev_env', 'Running in DEVELOPMENT environment');
  sqlite_interface.seedDatabase(db);
  console.log("Running in DEVELOPMENT environment");
}
else if (environment == 'PRODUCTION') {
  app.set('prod_env', 'Running in PRODUCTION environment');
  console.log("Running in PRODUCTION environment");
}



// Routing Configurations
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
