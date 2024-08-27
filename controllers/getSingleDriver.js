const Champ = require("../models/driverModel");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

const getSingleDriver = asyncHandler(async (req, res) => {
  const { id: driverId } = req.params;

  // check that ID wanted is valid acc. to mongoose's requirements, i.e. a 24 hex character
  if (!mongoose.Types.ObjectId.isValid(driverId)) {
    res.status(400).json({ error: "Invalid driver ID format" });
  }
  const wantedDriver = await Champ.findById(driverId);

  if (!wantedDriver) {
    res.status(404);
  }

  res
    .status(200)
    .json({ message: "The driver whose info you requested: ", wantedDriver });
});

module.exports = getSingleDriver;
