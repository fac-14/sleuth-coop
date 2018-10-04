const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

// API CALLS
app.get("/api/hello", (req, res) => {
  res.send({ express: "Hello From Express" });
});

if (process.env.NODE_ENV === "production") {
  // serve any static files
  app.use(express.static(path.join(__dirname, "../client/build")));

  // Handle React routing, resturn all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`listening on port ${port}`));
