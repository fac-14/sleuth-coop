const mkdirp = require("mkdirp");

exports.post = (req, res) => {
  const files = req.files;
  const compId = req.headers.referer.split("profile/")[1].split("/")[0];
  const fileArr = [];
  for (const key in files) {
    fileArr.push(files[key]);
  }

  mkdirp(`${__dirname}/public/${compId}`, err => {
    if (err) {
      console.log(err);
    } else {
      fileArr.forEach(file => {
        file.mv(`${__dirname}/public/${compId}/${file.name}`, err => {
          if (err) {
            return res.status(500).send(err);
          }
        });
      });
    }
  });
};
