var server = require('./server.js');

module.exports.registerUser = function (request, response) {

  server.bcrypt.hash(request.password, 10, function(err, hash) {

    if (err) {
      console.log(err, err.stack);
    } else {
      var token = jwt.sign({email: request.email}, 'secretkeyTODO');

      server.db.run("INSERT INTO users (email, pwhash, num, jwt) VALUES (?, ?, ?, ?)", request.email, hash, 0, token);

      res.json({
        num: 0,
        token: token
      });
    }

  });


}




  // TODO response
