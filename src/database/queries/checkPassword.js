const db = require("../db_connection");
const bcrypt = require("bcryptjs");

const checkPassword = object => {
  return new Promise((resolve, reject) => {
    const { email, password } = object;
    db.query(`SELECT password FROM users WHERE email = '${email}';`)
      .then(res => {
        if (res.length < 1) {
          reject("user not found");
        } else {
          const hash = res[0].password;
          // temp solution without hashing
          if (hash === password) {
            console.log("Its a match!");
            resolve(res);
          } else {
            reject(`error hashing pw:`);
          }
          // bcrypt.compare(password, hash, (err, res) => {
          //   if (err) reject(`error hashing pw: ${err}`);
          //   else {
          //     resolve(res);
          //   }
          // });
        }
      })
      .catch(e => reject(`Couldn't update db: ${e}`));
  });
};

module.exports = checkPassword;
