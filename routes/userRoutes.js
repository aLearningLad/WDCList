const express = require("express");
const router = express.Router();
const connectToDb = require("../lib/utils/connectToDb");

// add a driver entry
// @POST /api/user
// @private route
router.post("/api/drivers", async (req, res) => {
  res.status(201).json({ message: "New driver details added!" });
});

// fetch all drivers
// @GET /api/user
// @public route

// fetch a specific driver by id
// @GET /api/user/:id
// @public route

// update a specific driver by id
// @PUT /api/user/:id
// @private route

// delete a specific driver by id
// @DELETE /api/user/:id
// @private route

module.exports = router;
