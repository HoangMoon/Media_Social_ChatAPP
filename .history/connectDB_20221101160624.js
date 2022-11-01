const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test_database");

const Schema = mongoose.Schema;

const account = new Schema(
  {
    username: String,
    password: String,
  },
  {
    collation: "account",
  }
);
const AccountModel = mongoose.model("account", account);

AccountModel.find({})
  .then(function (data) {
    console.log("data", data);
  })
  .catch(function (err) {
    console.log("loi", err);
  });
