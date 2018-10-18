const db = require("../db_connection");
const bcrypt = require("bcryptjs");

const checkPassword = object => new Promise((resolve, reject) => {
    const { email, password } = object;
    db.query(`SELECT id, password FROM users WHERE email = '${email}';`)
      .then(res => {
        if (res.length < 1) {
          reject("user not found");
        } else {
          const hash = res[0].password;
          bcrypt.compare(password, hash, (err, resp) => {
            if (err) reject(`password incorrect: ${err}`);
            else {
              resolve(res[0].id);
            }
          });
        }
      })
      .catch(e => reject(`Couldn't update db: ${e}`));
  });

module.exports = checkPassword;
