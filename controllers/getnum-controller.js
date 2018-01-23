var server = require('../server.js');


module.exports.getNum = function (request, response) {

  var email = request.decoded;

  server.db.all("SELECT num FROM users WHERE email = ?", request.decoded.email, function(err, rows) {
    console.log(rows);
    response.json(rows[0]); // TODO kinda a hack?

    // TODO update num
  });

}
