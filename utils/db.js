const mysql = require('mysql2')

const pool = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : '123456789',
  database : 'easy_shopping'
})

module.exports = pool.promise()