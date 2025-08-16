const Subscriber = require("../models/Subscriber");

// POST: subscribe user
const subscribeUser = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    // Check if subscriber with this email already exists
    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      // 409 Conflict for duplicate email
      return res.status(409).json({ message: "Email already exists" });
    }

    const newSubscriber = new Subscriber({ email });
    await newSubscriber.save();
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (err) {
    console.error("Subscribe error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET: fetch all subscribers
const getAllSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find().sort({ createdAt: -1 });
    res.status(200).json(subscribers);
  } catch (err) {
    console.error("Fetch subscribers error:", err);
    res.status(500).json({ message: "Error fetching subscribers" });
  }
};

// DELETE: remove subscriber by ID
const deleteSubscriber = async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Subscriber.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
    res.status(200).json({ message: "Subscriber deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  subscribeUser,
  getAllSubscribers,
  deleteSubscriber,
};
