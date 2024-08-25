const express = require("express");
const router = express.Router();
const connectToDb = require("../lib/utils/connectToDb");
const Champ = require("../models/driverModel");
const mongoose = require("mongoose");
const addDriver = require("../controllers/addDriver");
const getAllDrivers = require("../controllers/getAllDrivers");

// add a driver entry
// @POST /api/user
// @private route
router.post("/api/drivers", addDriver);

// fetch all drivers
// @GET /api/user
// @public route
router.get("/api/drivers", getAllDrivers);

// fetch a specific driver by id
// @GET /api/user/:id
// @public route
router.get("/api/drivers/:id", async (req, res) => {
  const { id: driverId } = req.params;

  // check that ID wanted is valid acc. to mongoose's requirements, i.e. a 24 hex character
  if (!mongoose.Types.ObjectId.isValid(driverId)) {
    return res.status(400).json({ error: "Invalid driver ID format" });
  }
  const wantedDriver = await Champ.findById(driverId);

  if (!wantedDriver) {
    res.status(404);
    throw new Error("That driver is not listed on the database");
  }

  res.status(200).json(wantedDriver);
});

// update a specific driver by id
// @PUT /api/user/:id
// @private route
router.put("/api/drivers/:id", async (req, res) => {
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
    throw new Error("Something went wrong");
  }

  res.status(200).json({ message: "Driver updated!", updatedDriver });
});

// delete a specific driver by id
// @DELETE /api/user/:id
// @private route
router.delete("/api/drivers/:id", async (req, res) => {
  const { id: IdToDelete } = req.params;

  if (!mongoose.Types.ObjectId.isValid(IdToDelete)) {
    res.status(404);
    throw new Error(
      "That ID format looks a bit sus, or it isn't even in our driver database"
    );
  }

  const deletedDriver = await Champ.findByIdAndDelete(IdToDelete);

  res
    .status(200)
    .json({ message: "The following driver was deleted: ", deletedDriver });
});

module.exports = router;
