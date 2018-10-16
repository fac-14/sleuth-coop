const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();
const port = process.env.PORT || 5000;

// API CALLS

const profileData = require("./getProfileData");
const smesData = require("./getSMEs");
const updateInfo = require("./updateInfo");
const uploadFiles = require("./uploadFiles")
const questions = require("./questions");
const signup = require("./signup");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/profile/:id/sme", profileData.get)
app.get("/profile/:id", profileData.get);
app.get("/profile/:id/sme", profileData.get);
app.get("/smes", smesData.get);
app.get("/questions", questions.get);
app.post("/signup", signup.post);
app.post("/upload", updateInfo.post);
app.post("/upload-files", uploadFiles.post)

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

if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => console.log(`Express server running on port ${port}`));
}
module.exports = app;
