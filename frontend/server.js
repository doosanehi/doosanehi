const express = require("express");
const path = require("path");
var ghpages = require("gh-pages");

ghpages.publish("dist", function (err) {});

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "static")));

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(process.env.PORT || 3300, () => console.log("Server running..."));
