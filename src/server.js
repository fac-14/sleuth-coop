const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();
const port = process.env.PORT || 5000;

// API CALLS

const profileData = require("./getProfileData");
const smesData = require("./getSMEs");
const uploadFile = require("./uploadFile");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());

app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

app.get("/profile/:id", profileData.get);

app.get("/smes", smesData.get);

app.post("/upload", uploadFile.post);


if (process.env.NODE_ENV === "production") {
  // serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, resturn all requests to React app
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`listening on port ${port}`));
