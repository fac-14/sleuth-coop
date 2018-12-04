const db = require("../db_connection");

const getStatus = compId =>
  new Promise((resolve, reject) => {
    db.query(`SELECT deleted WHERE id = ${compId};`)
      .then(res => resolve(res))
      .catch(res => reject(res));
  });

module.exports = getStatus;
