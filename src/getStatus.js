const { getStatus } = require("./database/queries/index");

exports.get = (req, res) => {
  console.log("im in getStatus.js (exports.get)");
  getStatus(req.body.compId)
    .then(result => {
      res.send(JSON.stringify(result));
    })
    .catch(err => console.log(err));
};
