var mysql = require('mysql');

var con = mysql.createConnection({
  host: "kube-db",
  user: "dbadmin",
  password: "admin123",
  database: "nodejs"
});

con.connect(function (err){
    if(err) throw err;
});

module.exports = con;