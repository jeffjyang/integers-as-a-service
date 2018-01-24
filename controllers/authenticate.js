var server = require('../server.js');




module.exports.authenticateApi = function(request, response, next) {
  console.log("in authenticate API router");

  console.log(request.body.jwt);

  server.jwt.verify(request.body.jwt, 'secretkeyTODO', function(err, decoded) {
    if (err) {
      console.log("Error decoding token");
    } else {
      console.log("Successfully decoded");
      request.decoded = decoded;
      return next();
    }
  });
}



module.exports.authenticateLogin = function(request, response, next) {
  console.log("login auth execute");
  server.db.all("SELECT pwhash FROM users WHERE email = ?", request.body.email, function(err, rows) {
    if (err) {
      console.log(err.stack);
    } else {
      console.log("verifying password");

      server.bcrypt.compare(request.body.password, rows[0].pwhash, function(err, res) {
        if (res) {
          console.log("authenticate pass");
          next();

          // TODO remove password from request before proceeding?
        } else {
          console.log("authenticate fail");

          // TODO send response back failed login
        }
      });
    }
  });
}
