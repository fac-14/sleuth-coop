const fs = require('fs');
const db_connection = require('./db_connection');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

db_connection.query(sql)
  .then(res => console.log('Tables created: ', res))
  .catch(error => console.error('Error building tables: ', error))