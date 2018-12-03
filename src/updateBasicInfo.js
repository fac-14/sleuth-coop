const { updateBasicInfo } = require("./database/queries/index");

exports.post = (req, res) => {
  updateBasicInfo(req.body)
    .then(done => {
      console.log(req._passport.instance._strategies.jwt);
      res.send(done);
    })
    .catch(err => console.log(err));
};
