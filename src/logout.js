exports.post = (req, res) => {
  req.session.destroy();
  res.status(200);
  res.send("cookie session ended");
};

