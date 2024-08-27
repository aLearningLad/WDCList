const express = require("express");
const router = express.Router();
const addDriver = require("../controllers/addDriver");
const getAllDrivers = require("../controllers/getAllDrivers");
const getSingleDriver = require("../controllers/getSingleDriver");
const editDriver = require("../controllers/editDriver");
const deleteDriver = require("../controllers/deleteDriver");
const validateToken = require("../lib/utils/middleware/validateToken");

// add a driver entry
// @POST /api/user
// @private route
router.post("/", validateToken, addDriver);

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
router.put("/:id", validateToken, editDriver);

// delete a specific driver by id
// @DELETE /api/user/:id
// @private route
router.delete("/:id", validateToken, deleteDriver);

module.exports = router;
