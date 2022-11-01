const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();
mongoose.connect(process.env.MONGO_URL, () => {
  console.log("db connect");
});

app.listen(8088, () => {
  console.log("backend server is running!");
});
