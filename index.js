require('dotenv').config()
const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Leo");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please Login on the Website</h1>");
});

app.get("/cat", (req, res) => {
  res.send("<h2>Cats are seen here</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example App listening on port ${port}`);
});
