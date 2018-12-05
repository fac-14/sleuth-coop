const updateDelete = require("./database/queries/updateDelete");

exports.post = (req, res) => {
  updateDelete(req.body.compId, req.body.status)
    .then(() => res.send(req.body.status))
    .catch(err => {
      console.log(err);
      res.send(`Error updating the company account status: ${err}`);
    });
};
