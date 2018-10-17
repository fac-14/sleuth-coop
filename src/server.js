const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const session = require("express-session");
require("env2")("./config.env");

const app = express();
const port = process.env.PORT || 5000;

// SET UP SESSION HANDLER

if (!process.env.SECRET) throw new Error("cant find the secret! server.js");

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUnitialized: true,
    cookie: { maxAge: 600000 }
  })
);

// API CALLS

const profileData = require("./getProfileData");
const smesData = require("./getSMEs");
const updateInfo = require("./updateInfo");
const uploadFiles = require("./uploadFiles");
const updateBasicInfo = require("./updateBasicInfo");
const questions = require("./questions");
const signup = require("./signup");
const logincheck = require("./logincheck");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/profile/:id", profileData.get);
app.get("/profile/:id/sme", requiresLogin, profileData.get);
app.get("/smes", smesData.get);
app.get("/questions", requiresLogin, questions.get);

app.post("/signup", signup.post);
app.post("/login-check", logincheck.post);

app.post("/upload", requiresLogin, updateInfo.post);
app.post("/upload-files", requiresLogin, uploadFiles.post);
app.post("/updateBasicInfo", requiresLogin, updateBasicInfo.post);

// check they are logged in

function requiresLogin(req, res, next) {
  if (!req.session.loggedIn) {
    res.redirect(302, "/log-in");
  } else {
    next();
  }
}

if (process.env.NODE_ENV === "production") {
  // serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, resturn all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}
app.use((req, res, next) => {
  res.status(404).send("Sorry - can't find that!");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// SERVER LISTENING

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Express server running on port ${port}`));
}
module.exports = app;
