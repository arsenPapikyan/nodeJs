'use strict';
const mysql = require('mysql');
const  connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'node'
});

function mysqlQuery(q,callback){
  connection.connect();
  connection.query(q,callback);
connection.end()
}
module.exports = mysqlQuery;
