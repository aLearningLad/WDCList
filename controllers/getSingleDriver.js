const getSingleDriver = async (req, res) => {
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
};

module.export = getSingleDriver;
