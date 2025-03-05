const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB(); // Connect to MongoDB

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/recipes", require("./routes/recipeRoutes")); // Make sure this is properly mapped

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("API is working!");
});

// Error Handling Middleware (Optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Something went wrong!" });
});

// Start Server
const server = app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));

// Handle Uncaught Errors
process.on("unhandledRejection", (err) => {
    console.error(`❌ Unhandled Rejection: ${err.message}`);
    server.close(() => process.exit(1)); // Close server before exiting
});
