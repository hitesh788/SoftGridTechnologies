const express = require("express");
const router = express.Router();

const {
  subscribeUser,
  getAllSubscribers,
  deleteSubscriber,
} = require("../controllers/subscribeController");

// Change this:
router.post("/", subscribeUser); // POST /api/subscribers
router.get("/", getAllSubscribers); // GET /api/subscribers
router.delete("/:id", deleteSubscriber); // DELETE /api/subscribers/:id

module.exports = router;
