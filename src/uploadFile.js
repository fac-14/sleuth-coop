const { updateAnswers } = require('./database/queries/index')

exports.post = (req, res) => {

  const updatedObj = Object.assign({company_id: req.headers.referer.split("/")[4]}, {answers: req.body})

  const files = req.files;
  const body = req.body;
  // cycle through body updating answers database with new answers.

  const fileArr = [];
  for (const key in files) {
    fileArr.push(files[key]);
  }

  fileArr.forEach(file => {
    file.mv(`${__dirname}/public/${file.name}`, err => {
      if (err) {
        return res.status(500).send(err);
      }

      res.json({ file: `public/${file.name}` });
    });
  });

  // Above, we uploaded file(s). Below, we update table 

  console.log("ref url", req.headers.referer);

  console.log("updateAnswers is using:", req.body)


  console.log("OOPDATED UBJECT", updatedObj);

  updateAnswers(updatedObj)
    .then(done => res.send(done))
    .catch(err => console.log(err))

    res.end();
};
