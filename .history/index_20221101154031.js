const express = require("express");
const app = express();
const mongooes = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

app.listen(8088, () => {
  console.log("backend server is running!");
});
