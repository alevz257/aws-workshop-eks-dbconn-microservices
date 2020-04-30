'use strict';

var response = require('./res');
var connection = require('./conn');

exports.users = function(req, res) {
    connection.query('SELECT * FROM nodetable', function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            response.ok(rows, res);
        }
    });
};

exports.index = function(req, res) {
    response.ok("Hello from the Node JS RESTful side!", res)
};

exports.usersUpdate = function(req, res) {

    let firstnamevalue = req.body.firstname;
    let lastnamevalue = req.body.lastname;

    console.log(`INSERT INTO nodetable (firstname,lastname) VALUES ("${firstnamevalue}","${lastnamevalue}")`);

    connection.query(`INSERT INTO nodetable (firstname,lastname) VALUES ("${firstnamevalue}","${lastnamevalue}")`, function (error, rows, fields){
        if(error){
            console.log(error)
        } else{
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            response.ok(rows, res)
        }
    });
};