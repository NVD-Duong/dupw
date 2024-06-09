const { localsName } = require("ejs");
const express = require("express"); //common js
require("dotenv").config();

const path = require("path");
const app = express();
const port = process.env.PORT || 8080;
const hostname = process.env.HOST_NAME;

// config template engine
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");

//config static files
app.use(express.static(path.join(__dirname, "puclic")));

// khai báo route
app.get("/Bui", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
