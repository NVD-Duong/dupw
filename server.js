const { localsName } = require("ejs");
const express = require("express"); //common js
require("dotenv").config();
// const path = require("path");
const app = express();
const port = 8080;
const hostname = "locallhost";

console.log(">>>> check env", process.env);

// config template engine
// app.set("views", path.join(__dirname, "views"));
app.set("views", "views");
app.set("view engine", "ejs");
// khai báo ro
app.get("/", (req, res) => {
  res.send("Hello World! NÔNG van dương ");
});

app.get("/abc", (req, res) => {
  res.send("check abc ");
});
app.get("/Bui", (req, res) => {
  // res.send("<h1> Nông Văn Dương</h1>   ");
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
