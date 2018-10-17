const { addUser } = require("./database/queries/index");

exports.post = (req, res) => {
  addUser(req.body)
    // .then(res.redirect(302, "/log-in"))
    .then(done => res.send(done))
    .catch(err => console.log(err));
};
