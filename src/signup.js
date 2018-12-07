const { addUser } = require("./database/queries/index");

exports.post = (req, res) => {
  addUser(req.body)
    .then(done => res.send(done))
    .catch(err => console.log(err));
};
