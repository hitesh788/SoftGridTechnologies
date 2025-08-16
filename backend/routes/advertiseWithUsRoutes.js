const express = require("express");
const router = express.Router();
const advertiseWithUsController = require("../controllers/advertiseWithUsController");

// Add new contact
router.post("/", advertiseWithUsController.addContact);

// Get all contacts
router.get("/", advertiseWithUsController.getAllContacts);

// Delete contact by ID
router.delete("/:id", advertiseWithUsController.deleteContact);

module.exports = router;
