const db = require("../db_connection");

const setResetPasswordToken = (token, tokenExpDate, email) => {
  db.query(`UPDATE users SET (token, tokenExpDate) = ($1, $2) WHERE email=$3`, [
    token,
    tokenExpDate,
    email
  ])
    .then(() => token)
    .catch(err => console.log(err));
};

module.exports = setResetPasswordToken;
