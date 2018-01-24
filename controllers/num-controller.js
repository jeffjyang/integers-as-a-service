var server = require('../server.js');


module.exports.getCurrentNum = function(request, response) {

  server.db.all("SELECT num FROM users WHERE email = ?", request.decoded.email,
      function(err, rows) {

    console.log(rows[0].num);
    response.json({"num": rows[0].num});

  });

}





module.exports.getNextNum = function(request, response) {

  var email = request.decoded.email;

  //
  server.db.all("SELECT num FROM users WHERE email = ?", email, function(err, rows) {
    var num = rows[0].num + 1;


    server.db.run("UPDATE users SET num = ? WHERE email = ?", [num, email], function(err){
      if (err) {
        console.log(err.stack)
      } else {
        response.json({"num": num});
      }
    });


  });
}




module.exports.setNum = function(request, response) {
  var num = request.body.num;

  console.log(num)

  server.db.run("UPDATE users SET num = ? WHERE email = ?", [num, request.decoded.email],
      function (err) {

    if (err) {
      console.log(err.stack);
    } else {
      response.json({"num": num});
    }

  });
}
