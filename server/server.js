const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (request, response) => {
  response.send(`Response Complate`);
});

app.listen(PORT, () => {
  console.log(`Server ON: http://localhost:${PORT}`);
});
