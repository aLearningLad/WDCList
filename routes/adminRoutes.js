const express = require("express");
const router = express.Router();
const registerAdmin = require("../controllers/registerAdmin");
const loginAdmin = require("../controllers/loginAdmin");

// Create an admin account
router.post("/register", registerAdmin);

// login as admin account
router.post("/login", loginAdmin);

module.exports = router;
