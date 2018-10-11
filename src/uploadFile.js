exports.post = (req, res) => {
  const file = req.files.file;
  console.log(file);
  
  file.mv(`${__dirname}/public/${file.name}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({ file: `public/${file.name}` });
  });
};
