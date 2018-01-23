var server = require('../server.js');

module.exports.registerUser = function (request, response) {

  server.bcrypt.hash(request.body.password, 10, function(err, hash) {

    if (err) {
      console.log(err, err.stack);
    } else {
      var token = server.jwt.sign({email: request.body.email}, 'secretkeyTODO');

      server.db.run("INSERT INTO users (email, pwhash, num, jwt) VALUES (?, ?, ?, ?)", request.body.email, hash, 0, token);
      console.log("returning token: " + token);
      response.json({
        num: 0,
        token: token
      });
    }

  });


}




  // TODO response
