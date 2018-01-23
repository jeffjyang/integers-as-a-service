const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const crypto = require('crypto');


var port = 3000;

var sqlite3 = require('sqlite3').verbose(); // why verbose
var db = new sqlite3.Database('users.db');

module.exports = db;


app.use(bodyParser.json());

// setting up server
app.listen(port, function(){
    console.log("Express app listening on port " + port);
});

// TODO compression?
app.use(express.static('./public'));  // this sends clientside files
