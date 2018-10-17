const { checkPassword } = require("./database/queries/index");

exports.post = (req, res) => {
  // need to create this function!
  checkPassword(req.body)
    .then(resolve => {
      if (resolve) {
        req.session.loggedIn = true;
        req.session.profileId = resolve;
        res.send(JSON.stringify(resolve));
        // res.redirect(302, "/profile/:id/sme");
      } else {
        res.status(500).send(JSON.stringify("password error"));
        // res.redirect(302, "/formError/pw");
      }
    })
    .catch(e => {
      if (e === "user not found") {
        res.status(500).send(JSON.stringify("Email not found"));
        // res.redirect(302, "/formError/un");
      } else if (e === "password doesn't match") {
        res.status(500).send(JSON.stringify("Password doesn't match"));
      }
    });
};
