const path = require("path");
const express = require("express");

const scraper = require("./scraper");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", async (req, res) => {
  // wait for async res
  scraper.scraper().then(function (data) {
    res.json({ message: data });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
