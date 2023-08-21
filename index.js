const express = require("express");
const { connect } = require("./db/db");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(8080, async () => {
  console.log("server port running 8080");
  try {
    await connect;
    console.log("connect");
  } catch (error) {
    console.log(error);
  }
});
