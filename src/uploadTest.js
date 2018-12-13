exports.post = (req, res) => {
  const files = req.files;
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

      // res.json({ file: `public/${file.name}` });
    });
  });

  // Above, we uploaded file(s). Below, we update table

  // const no5array = Object.values(req.body.answers[5]);
};
