exports.post = (req, res) => {
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
};
