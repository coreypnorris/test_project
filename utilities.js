var sass    = require('node-sass');
var bourbon = require('node-bourbon');

var initializeSass = function() {
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
};

var timeNowInUnix = function() {
  return new Date().valueOf()
};

module.exports.initializeSass = initializeSass;
module.exports.timeNowInUnix = timeNowInUnix;


var basicAuth = require('basic-auth');
exports.basicAuth = function (req, res, next) {
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
