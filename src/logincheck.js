const { checkPassword } = require("./database/queries/index");
const jwt = require("jsonwebtoken");

exports.post = (req, res) => {
  console.log(req.body);
  // need to create this function!
  checkPassword(req.body)
    .then(userId => {
      if (userId) {
        const payload = {
          id: userId
        }; //Create JWT payload
        req.session.loggedIn = true;
        req.session.profileId = userId;
        jwt.sign(
          payload,
          process.env.SECRET,
          { expiresIn: 60000 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
              userId
            });
          }
        );

        // res.redirect(302, "/profile/:id/sme");
      } else {
        res.status(500).send(JSON.stringify("password error"));
        // res.redirect(302, "/formError/pw");
      }
    })
    .catch(err => {
      if (err === "user not found") {
        res.status(404).send(JSON.stringify("Email not found"));
        // res.redirect(302, "/formError/un");
      } else if (err === "password doesn't match") {
        res.status(400).send(JSON.stringify("Password doesn't match"));
      }
    });
};
