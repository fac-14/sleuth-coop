// check that we can send a query to the test database

const db = require("../db_connection");

const getUsers = () =>
  new Promise((resolve, reject) => {
    db.query(`SELECT * FROM users;`)
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

module.exports = getUsers;
