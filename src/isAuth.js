exports.get = (req, res) => {
  if (req.session.loggedIn) {
    console.log("user authenticated");
    // res.redirect(302, "/login");
    // res.send(res);
    res.send(true);
  } else {
    console.log("not authorised!!!!!");
    res.status(500).send("Not authorised");
  }
};
