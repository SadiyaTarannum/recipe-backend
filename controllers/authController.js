const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Function to generate JWT
const generateToken = (user) => {
    return jwt.sign(
        { userId: user._id.toString() },  // ✅ Ensure `userId` is included
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
};

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        console.log("🔹 Received request:", req.body); // Log request data

        const userExists = await User.findOne({ email });
        if (userExists) {
            console.log("⚠️ User already exists");
            return res.status(400).json({ message: "User already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashedPassword });

        console.log("✅ User registered successfully:", user);
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("❌ Error in registerUser:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log("⚠️ Invalid credentials - User not found");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.log("⚠️ Invalid credentials - Incorrect password");
            return res.status(401).json({ message: "Invalid credentials" });
        }

        // Generate JWT token
        const token = generateToken(user);

        console.log("✅ User logged in successfully:", user);

        // Optional: Send token as an HTTP-only cookie for security
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Secure in production
            sameSite: "Strict", // Protect against CSRF
            maxAge: 3600000, // 1 hour
        });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        console.error("❌ Error in loginUser:", error);
        res.status(500).json({ message: "Server error. Please try again later." });
    }
};

module.exports = { registerUser, loginUser };
