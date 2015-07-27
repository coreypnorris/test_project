var sqlite3 = require('sqlite3').verbose();
var utilities = require('../utilities.js');

var getDatabase = function() {
  var environment = process.env.ENVIRONMENT;
  var dbName = "./db/" + environment + ".db";
  var db = new sqlite3.Database(dbName);
  return db;
};

var createSchema = function(db, schema) {
  db.serialize(function() {
    db.run(schema);
  });
  db.close();
};

var seedDatabase = function(db) {
  createNewComic(db);
};

var createNewComic = function(db) {
  debugger;
};

var createTitle = function(db, titleName) {
  db.serialize(function() {
    db.run("BEGIN TRANSACTION");
    var stmt = db.prepare("INSERT INTO Titles (name, created_at, updated_at) VALUES (?,?,?)");
    stmt.run(titleName, utilities.timeNowInUnix(), utilities.timeNowInUnix());
    stmt.finalize();
    db.run("COMMIT");
  });
  db.close();
};

module.exports.getDatabase = getDatabase;
module.exports.createSchema = createSchema;
module.exports.createTitle = createTitle;
module.exports.seedDatabase = seedDatabase;
