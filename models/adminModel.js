const mongoose = require("mongoose");

const adminAcc = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please attach a username for this account."],
    },
    adminEmail: {
      type: String,
      required: [true, "You must provide an admin email"],
    },
    password: {
      type: String,
      required: [true, "You must provide a password for the admin account"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("adminAcc", adminAcc);
