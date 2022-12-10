const express = require("express");
const app = express();
const ejs = require("ejs");

//middleware
app.use(express.static("public"));
app.use(express.static("public/pic"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("*", (req, res) => {
  res.status(404);
  console.log(res.statusCode);
  res.render("error.ejs");
});

app.listen(3000, () => {
  console.log("Server is running");
});
