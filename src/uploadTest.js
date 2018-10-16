exports.post = (req, res) => {
  const files = req.files;
  console.log("FILES", req.files);
  // cycle through body updating answers database with new answers.
  const fileArr = [];
  for (const key in files) {
    fileArr.push(files[key]);
  }

  console.log("fileArray", fileArr);

  fileArr.forEach(file => {
    file.mv(`${__dirname}/public/${file.name}`, err => {
      if (err) {
        console.log("2", err);
        return res.status(500).send(err);
      }

      // res.json({ file: `public/${file.name}` });
    });
  });

  // Above, we uploaded file(s). Below, we update table

  // const no5array = Object.values(req.body.answers[5]);
};
