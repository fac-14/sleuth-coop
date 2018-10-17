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
        res.end("password error");
        // res.redirect(302, "/formError/pw");
      }
    })
    .catch(e => {
      if (e === "user not found") {
        res.end(e);
        // res.redirect(302, "/formError/un");
      } else {
        console.log(e);
      }
    });
};
