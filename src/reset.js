const db = require("./database/db_connection");
const bcrypt = require("bcryptjs");

exports.post = (req, res) => { console.log('token server=',req.body.token);
  db.query(`SELECT tokenExpDate FROM users WHERE token = $1`, [req.body.token])
    .then(tokenExpDate => { console.log('expDate= ',tokenExpDate);
      if (tokenExpDate.length === 0) {
        res.send("Token is invaid");
      } else if (Number(tokenExpDate[0].tokenexpdate) < Date.now()) {
        res.send("Token has expired. Please get another token");
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            console.log(err);
          } else {
            db.query(`UPDATE users SET password = $1 WHERE token=$2`, [
              hash,
              req.body.token
            ]).then(() => {
              res.send(`password changed. Please go to login`);
            });
          }
        });
      }
    })
    .catch(err => console.log(err));
};
