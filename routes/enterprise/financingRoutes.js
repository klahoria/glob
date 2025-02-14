const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  res.json({ message: "Users list" });
});

router.post("/users", (req, res) => {
  res.json({ message: "User created" });
});

router.post("/", (req, res) => {
  res.json({ message: "User created" });
});

module.exports = router;
