require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const subscribeRoutes = require("./routes/subscribeRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoute");
const blogSubscriberRoutes = require("./routes/BlogSubscriberRoute");
const advertiseWithUsRoutes = require("./routes/advertiseWithUsRoutes");
const adminAuthRoutes = require("./routes/adminAuthRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Allowed origins
const allowedOrigins = [
  "https://softgridtechnologies.site", // frontend panel
  "https://adminn-teal.vercel.app",    // admin panel
  "https://softgridtechnologiesss.vercel.app",
  "http://localhost:5173",
  "http://localhost:5174",
];

// ✅ CORS middleware
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed for this origin"));
      }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // allow cookies or auth headers if needed
  })
);

// ✅ Handle preflight requests
app.options("*", cors());

// ✅ Body parser
app.use(express.json());

// ✅ Default root route
app.get("/", (req, res) => {
  res.send("✅ SoftGrid Technologies Backend is running!");
});

// ✅ API routes
app.use("/api/subscribers", subscribeRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/blog-subscribers", blogSubscriberRoutes);
app.use("/api/advertise-with-us", advertiseWithUsRoutes);
app.use("/api/admin-auth", adminAuthRoutes);

// ✅ MongoDB Connection
const mongoURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/softgrid";

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log(
      `✅ MongoDB connected: ${
        mongoURI.includes("localhost") ? "Local" : "Atlas"
      }`
    )
  )
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
