const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/api", (req, res) => {
  res.setHeader("Access-Control-Allow-origin", "http://localhost:3000");
  res.send({ host: "seo" });
});

app.listen(PORT, () => {
  console.log(`Server ON: http://localhost:${PORT}`);
});
