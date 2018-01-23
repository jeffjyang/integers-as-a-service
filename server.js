const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerController = require('./controllers/register-controller.js')

var port = 3000;

var sqlite3 = require('sqlite3').verbose(); // why verbose
var db = new sqlite3.Database('users.db');

module.exports.db = db;
module.exports.bcrypt = bcrypt;
module.exports.jwt = jwt;


app.use(bodyParser.json());

// setting up server
app.listen(port, function(){
    console.log("Express app listening on port " + port);
});

// TODO compression?
app.use(express.static('./public'));  // this sends clientside files


app.post('/register', function(request, response){
  console.log("New POST to register");
  console.log("Email: " + request.body.email);

  registerController.registerUser(request, response);
});

app.get('/getnum', function(request, response){

});
