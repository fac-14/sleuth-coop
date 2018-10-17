exports.get = (req, res) => {
  if (req.session.loggedIn) {
    console.log("user authenticated");
    // res.redirect(302, "/login");
    // res.send(res);
    const profileId = req.session.profileId;
    console.log("SENDING ID>>>", profileId);
    res.send(JSON.stringify(profileId));
  } else {
    console.log("not authorised!!!!!");
    res.status(500).send("Not authorised");
  }
};
