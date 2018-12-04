exports.post = (req, res) => {
  req.session.destroy();
  // .then(res.redirect(302, "/log-in"))
  res.status(200);
  res.json("cookie session ended");
};
