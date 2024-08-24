const mongoose = require("mongoose");

const connectToDb = async () => {
  const connectedNow = await mongoose.connect(
    process.env.MONGO_DB_CONNECTION_STRING
  );

  if (connectedNow) {
    console.log("Yup, connected to MongoDB now!");
  }
};

module.exports = connectToDb;
