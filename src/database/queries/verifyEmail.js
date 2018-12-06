const db = require("../db_connection");

const verifyEmail = email =>
  new Promise((resolve, reject) => {
    db.query(`SELECT id, password FROM users WHERE email = '${email}';`)
      .then(res => {
        if (res.length < 1) {
          reject("email not found");
        } else {
          resolve("Email is valid");
        }
      })
      .catch(err => reject(`Unknown error finding the email address: ${err}`));
  });

module.exports = verifyEmail;
