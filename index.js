const express = require("express");
const session = require("express-session");
const app = express();

app.use(session({ secret: "thisisnotagoodsecret" }));

app.get("/viewcount", (req, res) => {
  req.session.count ? req.session.count++ : (req.session.count = 1);
  res.send(`you have viewed this page ${req.session.count} times`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
