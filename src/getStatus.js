const getStatus = require("./database/queries/getStatus");

exports.post = (req, res) => {
  getStatus(req.body.compId)
    .then(result => {
      res.send(JSON.stringify(result));
    })
    .catch(err => console.log(err));
};
