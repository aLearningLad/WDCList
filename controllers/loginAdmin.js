const bcrypt = require("bcrypt");
const adminAcc = require("../models/adminModel");

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res
      .status(400)
      .json({ message: "Please provide both an email and a password" });
    throw new Error("Please provide both an email and a password");
  }

  const userInDb = await adminAcc.findOne({ email });
  if (userInDb && (await bcrypt.compare(password, userInDb.password))) {
    res.status(200).json({ message: "User found in DB! ", userInDb });
  } else {
    res.status(404).json({
      message:
        "Either that email address doesn't exist in the database, or the provided password is incorrect.",
    });
  }
};

module.exports = loginAdmin;
