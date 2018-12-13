const { updateAnswers } = require("./database/queries/index");

exports.post = (req, res) => {
  const updatedObj = Object.assign(
    { company_id: req.headers.referer.split("/")[4] },
    { answers: req.body }
  );
  updateAnswers(updatedObj)
    .then(done => res.send(done))
    .catch(err => console.log(err));
};
