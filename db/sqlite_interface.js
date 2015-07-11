var sqlite3 = require('sqlite3').verbose();

exports.createTestDatabase = function() {
  return db = new sqlite3.Database('./db/demodb01');
};

// db.serialize(function() {
//     db.run("CREATE TABLE IF NOT EXISTS Titles (runtime REAL)");
//
//     db.run("INSERT INTO PublicComicsDev (runtime) VALUES (?)", new Date().getTime());
//
//     db.each("SELECT runtime FROM demo", function(err, row) {
//         console.log("This app was run at " + row.runtime);
//     });
// });
//
// db.close();
