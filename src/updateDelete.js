const updateDelete = require("./database/queries/updateDelete");

exports.post = (req, res) => {
  updateDelete(req.body.compId, req.body.status)
    .then(() =>
      res.send(
        `account status of compId ${req.body.compId} changes to ${
          req.body.status
        }`
      )
    )
    .catch(err => {
      console.log(err);
      res.send(`Error updating the company account status: ${err}`);
    });
};
