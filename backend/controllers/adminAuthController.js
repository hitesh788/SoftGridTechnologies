const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminUser = require("../models/AdminUser");

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find admin by username
    const admin = await AdminUser.findOne({ username });
    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Compare password with bcrypt
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({ token, message: "Login successful" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
