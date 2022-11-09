const router = require("express").Router();
router.get("/", (req, res) => {
  res.send("wellcom to the users");
});
module.exports = router;
