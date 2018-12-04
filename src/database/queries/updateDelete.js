const db = require("../db_connection");

const updateDelete = (companyId, num) =>
  new Promise((resolve, reject) => {
    db.query(`UPDATE companies SET deleted = $1 WHERE id=${companyId}`, [num])
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });

module.exports = updateDelete;
