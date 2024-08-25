const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");
const connectToDb = require("./lib/utils/connectToDb");
const errorHandler = require("./lib/utils/middleware/errorHandler");
const adminRoutes = require("./routes/adminRoutes");

const app = express();
app.use(express.json());
app.use("/api/drivers/", userRoutes);
app.use("/api/admin/", adminRoutes);
app.use(errorHandler);

connectToDb();

app.listen(process.env.PORT, () => {
  console.log(`server is listening here: http://localhost:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome, bruv!" });
});
