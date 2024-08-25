const express = require("express");
const router = express.Router();
const registerAdmin = require("../controllers/registerAdmin");

// Create an admin account
router.get("/register", registerAdmin);

module.exports = router;
