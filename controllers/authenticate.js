var server = require('../server.js');




module.exports.authenticate = function(request, response, next) {
  console.log("in authenticate router");

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
