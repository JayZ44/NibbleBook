const express = require("express");
const app = express();
const cors = require("cors");
const snacksController = require("./controllers/snacksController");

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/snacks", snacksController);

app.get("/", (req, res) => {
  res.send("Welcome to NibbleBook!");
});

app.get("*", (req, res) => {
  res.status(404).send("Page Not Found :(");
});
module.exports = app;
