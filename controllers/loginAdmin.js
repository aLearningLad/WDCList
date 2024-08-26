const bcrypt = require("bcrypt");
const adminAcc = require("../models/adminModel");
const jwt = require("jsonwebtoken");

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
    const accessToken = jwt.sign(
      {
        user: {
          username: userInDb.username,
          useremail: userInDb.email,
        },
      },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: "15m" }
    );

    res.status(200).json({ message: "User found in DB! ", userInDb });
  } else {
    res.status(404).json({
      message:
        "Either that email address doesn't exist in the database, or the provided password is incorrect.",
    });
  }
};

module.exports = loginAdmin;
