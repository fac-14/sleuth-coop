const db = require("../db_connection");

const getSMEs = () =>
  new Promise((resolve, reject) => {
    db.query(
      `SELECT company_name, description, id FROM companies WHERE companies.deleted = false`
    )
      .then(res => resolve(res))
      .catch(res => reject(res));
  });

module.exports = getSMEs;
