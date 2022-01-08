const path = require("path");
const express = require("express");

const scraper = require("./scraper");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.get("/api", async (req, res) => {
  try {
    const data = await scraper.scraper();
    res.status(200).send({ data });
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
