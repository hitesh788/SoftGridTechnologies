const express = require("express");
const router = express.Router();
const BlogSubscriber = require("../models/BlogSubscriber");

// POST - Add subscriber
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const existing = await BlogSubscriber.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Already subscribed" });
    }

    const subscriber = new BlogSubscriber({ email });
    await subscriber.save();

    res.status(201).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("Error subscribing:", error);
    res.status(500).json({ message: "Invalid Email" });
  }
});

// GET - Fetch all subscribers
router.get("/", async (req, res) => {
  try {
    const subscribers = await BlogSubscriber.find().sort({ createdAt: -1 });
    res.json(subscribers);
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE - Remove a blog subscriber
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSubscriber = await BlogSubscriber.findByIdAndDelete(id);

    if (!deletedSubscriber) {
      return res.status(404).json({ message: "Subscriber not found" });
    }

    res.json({ message: "Subscriber deleted successfully" });
  } catch (error) {
    console.error("Error deleting subscriber:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
