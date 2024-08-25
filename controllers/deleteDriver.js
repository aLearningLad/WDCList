const Champ = require("../models/driverModel");
const asyncHandler = require("express-async-handler");

const deleteDriver = asyncHandler(async (req, res) => {
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

module.exports = deleteDriver;
