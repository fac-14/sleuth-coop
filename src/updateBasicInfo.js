const { updateBasicInfo } = require("./database/queries/index");

exports.post = (req, res) => {
  console.log("REQ!!!", req.body);
  updateBasicInfo(req.body)
    .then(done => res.send(done))
    .catch(err => console.log(err));
};
