require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const AdminUser = require("./models/AdminUser"); // adjust path if needed

const mongoURI = process.env.MONGO_URI;

const createAdmin = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const username = "admin"; // your desired username
    const password = "admin123"; // your desired password

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create admin user
    const admin = new AdminUser({
      username,
      password: hashedPassword,
    });

    await admin.save();
    console.log("✅ Admin user created successfully!");
    process.exit(0);
  } catch (err) {
    console.error("❌ Error creating admin:", err);
    process.exit(1);
  }
};

createAdmin();
