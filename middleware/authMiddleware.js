const jwt = require("jsonwebtoken");
const User = require("../models/User");
const dotenv = require("dotenv");

dotenv.config();

const protect = async (req, res, next) => {
  try {
    console.log("🔹 Incoming Request Headers:", req.headers); // Log request headers

    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("🚫 No token received");
      return res.status(401).json({ message: "Not authorized, no token" });
    }

    console.log("🔹 Received Token:", token);

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("✅ Token Decoded:", decoded);

    if (!decoded.userId) {
      console.log("🚫 userId missing in token payload");
      return res.status(401).json({ message: "Invalid token" });
    }

    // Find user
    req.user = await User.findById(decoded.userId).select("-password");

    if (!req.user) {
      console.log("🚫 User not found for token:", decoded.userId);
      return res.status(401).json({ message: "User not found" });
    }

    console.log("✅ User authenticated:", req.user.email);

    next();
  } catch (error) {
    console.error("❌ Token verification error:", error.message);
    res.status(401).json({ message: "Not authorized, token failed" });
  }
};

module.exports = { protect };
