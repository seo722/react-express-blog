const express = require("express");
const app = express();
// const db = require("./config/db");

const sequelize = require("./models").sequelize;
sequelize.sync();

app.use(express.json());

// app.get("/api/test", (req, res) => {
//   res.setHeader("Access-Control-Allow-origin", "http://localhost:3000");
//   db.query("select * from test", (err, data) => {
//     if (!err) {
//       res.send(data);
//     } else {
//       console.log(err);
//       res.send(err);
//     }
//   });
//   // res.send({ host: "seo" });
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server ON: http://localhost:${PORT}`);
});
