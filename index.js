const express = require("express");
const app = express();
const path = require("path");
const randomWords = require("random-words");

app.set("view-engine", "ejs");

app.use(express.static(path.join(__dirname, "views")));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

app.set({ "Content-Type": "text/html" });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/wordgenerator", (req, res) => {
  res.render("words.ejs");
});

app.get("/sentencegenerator", (req, res) => {
  res.render("sentences.ejs");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
