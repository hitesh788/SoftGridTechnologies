require("dotenv").config();
const mongoose = require("mongoose");
const AdminUser = require("./models/AdminUser");

const seedAdminUser = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const existing = await AdminUser.findOne({ username: "admin" });
    if (existing) {
      console.log("⚠️ Admin already exists:", existing.username);
    } else {
      const admin = await AdminUser.create({
        username: "Admin@softgrid",
        password: "Softgrid@admin", // raw password
      });
      console.log("✅ Admin created:", admin.username);
    }

    await mongoose.connection.close();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    await mongoose.connection.close();
  }
};

seedAdminUser();
