const adminAcc = require("../models/adminModel");
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");

const registerAdmin = async (req, res) => {
  const { username, adminEmail, password, passKey } = req.body;
  const key1 = process.env.PASS_CODE_OPTION_1;
  const key2 = process.env.PASS_CODE_OPTION_2;
  const key3 = process.env.PASS_CODE_OPTION_3;

  if (
    passKey.toString() !== key1.toString() &&
    passKey.toString() !== key2.toString() &&
    passKey.toString() !== key3.toString()
  ) {
    res.status(401).json({ message: "That passKey looks sus..." });
    throw new Error("Not allowed. That passKey is incorrect.");
  }

  if (!username || !adminEmail || !password) {
    res.status(403);
    throw new Error("Please ensure all values are filled");
  }

  //  salting password before sending to DB
  const hashedPassword = await bcrypt.hash(password, 10);

  // creating the admin
  const newAdmin = await adminAcc.create({
    username,
    adminEmail,
    password: hashedPassword,
  });

  if (newAdmin) {
    res
      .status(201)
      .json({ message: "New admin account registered!: ", newAdmin });
  }
};

module.exports = registerAdmin;
