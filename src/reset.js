const db = require("./database/db_connection");
const bcrypt = require("bcryptjs");

exports.post = (req, res) => {
  db.query(`SELECT tokenExpDate FROM users WHERE token = $1`, [req.body.token])
    .then(tokenExpDate => { 
      if (tokenExpDate.length === 0) {
        res.send("Token is invalid");
      } else if (Number(tokenExpDate[0].tokenexpdate) < Date.now()) {
        res.send(
          `Token has expired (they only last an hour). Please go back to ${
            req.headers.host
          }/forgot-password and re-enter your email address`
        );
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            db.query(`UPDATE users SET password = $1 WHERE token=$2`, [
              hash,
              req.body.token
            ]).then(() => {
              res.send(`Password changed. Please go to login`);
            });
          }
        });
      }
    })
    .catch(err => console.log(err));
};
