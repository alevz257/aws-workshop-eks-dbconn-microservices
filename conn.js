var mysql = require('mysql');

var con = mysql.createConnection({
  host: "db",
  user: "dbadmin",
  port: "3306",
  password: "admin123",
  database: "nodejs"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;