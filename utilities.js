/**
 * Your utility library for express
 */

//var basicAuth = require('basic-auth');
//upload = require('./routes/upload.js');
///**
// * Simple basic auth middleware for use with Express 4.x.
// *
// * @example
// * app.use('/api-requiring-auth', utils.basicAuth('username', 'password'));
// *
// * @param   {string}   username Expected username
// * @param   {string}   password Expected password
// * @returns {function} Express 4 middleware requiring the given credentials
// */
//exports.basicAuth = function(username, password) {
//    return function(req, res, next) {
//        var user = basicAuth(req);
//
//        if (!user || user.name !== username || user.pass !== password && req.originalUrl !== '/upload') {
//            res.set('WWW-Authenticate', 'Basic realm=Authorization Required');
//            return res.send(401);
//        }
//
//        res.send(upload.new);
//    };
//};

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