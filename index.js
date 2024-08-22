const express = require("express");
const dotenv = require("dotenv").config();
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json());
app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
  console.log(`server is listening here: http://localhost:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome, bruv!" });
});
