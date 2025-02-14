const express = require("express");
const glob = require("glob");
const path = require("path");

const router = express.Router();

// Load all route files dynamically (except index.js itself)
glob.sync(__dirname + "/*.js").forEach((file) => {
  if (file !== __filename) {
    const route = require(file);
    if (typeof route === "function") {
      router.use("/customer",route);
    }
  }
});

module.exports = router;
