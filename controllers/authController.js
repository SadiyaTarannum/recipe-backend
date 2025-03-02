const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

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
        console.error("❌ Error in registerUser:", error); // Log error details
        res.status(500).json({ message: error.message }); // Send actual error message
    }
};
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ message: "Invalid credentials" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };
