const { updateBasicInfo } = require("./database/queries/index");

exports.post = (req, res) => {
  updateBasicInfo(req.body)
    .then(done => res.send(done))
    .catch(err => console.log(err));
};
