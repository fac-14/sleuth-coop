const db = require("../db_connection");

const getCompanyInfo = userID =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT * FROM companies INNER JOIN users ON users.id
    = companies.user_id WHERE companies.user_id = ${userID};`
    )
      .then(res => resolve(res))
      .catch(err => reject(err));
  });

module.exports = getCompanyInfo;
