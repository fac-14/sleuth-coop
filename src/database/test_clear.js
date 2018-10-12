const fs = require("fs");
const db = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/test_clear.sql`).toString();

const clearTestDatabase = () => db.query(sql);

module.exports = clearTestDatabase;
