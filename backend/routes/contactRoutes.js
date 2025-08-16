// backend/routes/contactRoutes.js

const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // MongoDB model

// POST /api/contact - Save a new contact message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message received!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/contact - Fetch all contact messages
router.get("/", async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error("Error fetching messages:", err);
    res.status(500).json({ message: "Failed to fetch messages" });
  }
});
// DELETE /api/contact/:id - Delete a contact message
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Contact.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (err) {
    console.error("Error deleting message:", err);
    res.status(500).json({ message: "Failed to delete message" });
  }
});


module.exports = router;
