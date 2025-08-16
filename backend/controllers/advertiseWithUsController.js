const AdvertiseWithUs = require("../models/AdvertiseWithUs");

// POST - Add new contact
exports.addContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ message: "Name, email, and message are required." });
    }

    const newContact = new AdvertiseWithUs({ name, email, phone, message });
    await newContact.save();

    res
      .status(201)
      .json({ message: "Contact saved successfully", contact: newContact });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET - All contacts for Admin Panel
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await AdvertiseWithUs.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE - Remove contact by ID
exports.deleteContact = async (req, res) => {
  try {
    const contact = await AdvertiseWithUs.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
