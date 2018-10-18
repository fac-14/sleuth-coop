exports.get = (req, res) => {
  if (req.session.loggedIn) {
    const profileId = req.session.profileId;
    res.send(JSON.stringify(profileId));
  } else {
    res.status(500).send("Not authorised");
  }
};
