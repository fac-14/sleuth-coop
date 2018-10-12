const fs = require("fs");
const dbConnection = require("./db_connection");

const sql = fs.readFileSync(`${__dirname}/test_build.sql`).toString();

const initialiseTestDatabase = () => dbConnection.query(sql);

module.exports = initialiseTestDatabase;
