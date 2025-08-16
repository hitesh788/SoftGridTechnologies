const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/add", async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  await newUser.save();
  res.json({ message: "User added" });
});

router.get("/all", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

module.exports = router;
