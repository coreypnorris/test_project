/**
 * Created by corey_000 on 6/19/2015.
 */

exports.new = function(req, res) {
    res.render('comics_new');
};

exports.create_preview = function(req, res) {
  debugger;
};

exports.create = function(req, res) {
  debugger;
  var sqlite_interface = req.app.get('sqlite_interface');
  var db = sqlite_interface.getDatabase();
  sqlite_interface.createTitle(db, req.body.titleName);
  res.redirect('/comics/new');
};

exports.edit = function(req, res) {
  res.render('comics_edit');
};
