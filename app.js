const path = require("path");
const express = require("express");
const app = express();
PORT = process.env.PORT || 1337;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  console.log(`Doc served on http://localhost:${PORT}`);
});
