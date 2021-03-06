var jwtStrategy = require('passport-jwt').Strategy;

var User = require('../app/models/user.js');
var config = require('../config/database');

module.exports = function(passport) {
  var opts = {};
  opts.secretOrKey = config.secret;
  passport.use(new jwtStrategy(opts, function(jwt_payload, done){
    User.find({id:jwt_payload.id}, function(err, user) {
      if(err) {
        return done(err, false;)
      }
      if(user) {
        done(null, user);
      }
      else {
        done(null, false);   -
      }
    })
  }))
};
