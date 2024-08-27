const Champ = require("../models/driverModel");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const editDriver = asyncHandler(async (req, res) => {
  const { id: IdToUpdate } = req.params;

  if (!mongoose.Types.ObjectId.isValid(IdToUpdate)) {
    res.status(404);
    throw new Error("That driver isn't on the database, sorry!");
  }

  const updatedDriver = await Champ.findByIdAndUpdate(IdToUpdate, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedDriver) {
    res.status(400);
  }

  res.status(200).json({ message: "Driver updated!", updatedDriver });
});

module.exports = editDriver;
