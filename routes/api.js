/**
 * Created by corey_000 on 6/19/2015.
 */

exports.comments = function(req, res) {
    var fs = req.app.get('fs');
    var commentsJSON = fs.readFile('./comments.json', 'utf8', function (err, data) {
      if (err) {
        // TODO: Log these errors in a database table.
        console.log(err);
      }
      else {
        res.json(JSON.parse(data));
      }
    });
};
