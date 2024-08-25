const adminAcc = require("../models/adminModel");
const dotenv = require("dotenv").config();

const registerAdmin = async (req, res) => {
  const { username, adminEmail, password, passKey } = req.body;

  const key1 = process.env.PASS_CODE_OPTION_1;
  const key2 = process.env.PASS_CODE_OPTION_2;
  const key3 = process.env.PASS_CODE_OPTION_3;

  if (
    passKey.toString() !== key1.toString() ||
    passKey.toString() !== key2.toString() ||
    passKey.toString() !== key3.toString()
  ) {
    res.status(401);
    throw new Error("Not allowed. That passKey is incorrect.");
  }

  if (!username || !adminEmail || !password) {
  }
};

module.exports = registerAdmin;
