const express = require("express");
const router = express.Router();
const Subscriber = require("../models/Subscriber");
const Contact = require("../models/Contact");
const BlogSubscriber = require("../models/BlogSubscriber"); // import blog subscriber model
const AdContact = require("../models/AdvertiseWithUs"); // import ad contact model
router.get("/", async (req, res) => {
  try {
    const totalSubscribers = await Subscriber.countDocuments();
    const totalMessages = await Contact.countDocuments();
    const totalBlogSubscribers = await BlogSubscriber.countDocuments();
    const totalAdContacts = await AdContact.countDocuments(); // NEW

    res.json({
      totalSubscribers,
      totalMessages,
      totalBlogSubscribers,
      totalAdContacts,
    });
  } catch (error) {
    console.error("Error fetching admin stats:", error);
    res.status(500).json({ error: "Failed to fetch admin stats" });
  }
});

module.exports = router;
