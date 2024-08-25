const getAllDrivers = async (req, res) => {
  const driversList = await Champ.find();

  if (!driversList) {
    res.status(404);
    throw new Error("WDC driver's list seems to be empty right now.");
  }

  res.json(driversList);
  res.status(200);
};

module.exports = getAllDrivers;
