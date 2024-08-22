const express = require("express");
const dotenv = require("dotenv").config();

const app = express();
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log(`server is listening here: http://localhost:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome, bruv!" });
});
