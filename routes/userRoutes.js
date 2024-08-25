const express = require("express");
const router = express.Router();
const connectToDb = require("../lib/utils/connectToDb");
const Champ = require("../models/driverModel");
const mongoose = require("mongoose");
const addDriver = require("../controllers/addDriver");
const getAllDrivers = require("../controllers/getAllDrivers");
const getSingleDriver = require("../controllers/addDriver");
const editDriver = require("../controllers/editDriver");
const deleteDriver = require("../controllers/deleteDriver");

// add a driver entry
// @POST /api/user
// @private route
router.post("/", addDriver);

// fetch all drivers
// @GET /api/user
// @public route
router.get("/", getAllDrivers);

// fetch a specific driver by id
// @GET /api/user/:id
// @public route
router.get("/:id", getSingleDriver);

// update a specific driver by id
// @PUT /api/user/:id
// @private route
router.put("/:id", editDriver);

// delete a specific driver by id
// @DELETE /api/user/:id
// @private route
router.delete("/:id", deleteDriver);

module.exports = router;
