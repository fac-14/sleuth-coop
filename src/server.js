require("env2")("./config.env");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const session = require("express-session");
const passport = require("passport");

const profileData = require("./getProfileData");
const smesData = require("./getSMEs");
const updateInfo = require("./updateInfo");
const uploadFiles = require("./uploadFiles");
const updateBasicInfo = require("./updateBasicInfo");
const questions = require("./questions");
const signup = require("./signup");
const logincheck = require("./logincheck");
const logout = require("./logout");
const isAuth = require("./isAuth");
const updateDelete = require("./updateDelete");
const getStatus = require("./getStatus");
const forgotPassword = require("./forgotPassword");
const reset = require("./reset");

const app = express();
const port = process.env.PORT || 5000;

if (!process.env.SECRET) throw new Error("cant find the secret! server.js");
// Passport middleware

app.use(passport.initialize());

// Passport Config

require("./passport")(passport);
/////Express sessions: to be superceeded
app.use(
  session({
    name: "session",
    secret: process.env.SECRET,
    resave: false,
    saveUnitialized: true,
    cookie: { maxAge: 600000 }
  })
);

// API CALLS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

// Serve image files e.g. logos from public file
app.use("/static", express.static(path.join(__dirname, "./public")));

// Get data routes
app.get("/profile/:id/get", profileData.get);
app.get("/profile/:id/sme/get", profileData.get);
app.get("/smes", smesData.get);
app.get("/questions", questions.get);

// download route
app.get("/download/:compId/:file", (req, res) => {
  res.sendFile(`${__dirname}/public/${req.params.compId}/${req.params.file}`); // Set disposition and send it.
});

// Check for authorised cookie
app.get("/auth", isAuth.get);

// Create new profile
app.post("/signup", signup.post);
// Sign in route, authorise cookie
app.post("/login-check", logincheck.post);

//logout - removes the cookie sessions
app.post("/logout", logout.post);

// getStatus - retrieves the status of the company so the deactivate/reactiviate button is shown correctly
app.post("/getStatus", getStatus.post);
// PROTECTED ROUTES >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//delete - changes the delete status, to hide or show a company.
app.post(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  updateDelete.post
);
// Update profile info routes
app.post(
  "/upload",
  passport.authenticate("jwt", { session: false }),
  updateInfo.post
);
app.post(
  "/upload-files",
  // passport.authenticate("jwt", { session: false }),
  uploadFiles.post
);
app.post(
  "/updateBasicInfo",
  passport.authenticate("jwt", { session: false }),
  updateBasicInfo.post
);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

app.post("/forgot-password", forgotPassword.post);

app.post("/reset/", reset.post);

if (process.env.NODE_ENV === "production") {
  // serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, resturn all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.use((req, res) => {
  res.status(404).send("Sorry - can't find that!");
});

app.use((err, req, res) => {
  res.status(500).send(`Something broke! ${err}`);
});

// SERVER LISTENING

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Express server running on port ${port}`));
}
module.exports = app;
