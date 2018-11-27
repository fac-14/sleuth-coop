exports.post = (req, res) => {
  const files = req.files;
  const compId = req.headers.referer.split("profile/")[1].split("/")[0];
  const fileArr = [];
  for (const key in files) {
    fileArr.push(files[key]);
  }

  fileArr.forEach(file => {
    const fileExtension = `${compId}-${file.name}`;
    file.mv(`${__dirname}/public/${fileExtension}`, err => {
      if (err) {
        return res.status(500).send(err);
      }
    });
  });
};
