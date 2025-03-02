const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

// Define Register Route
router.post("/register", registerUser);

// Define Login Route
router.post("/login", loginUser);

module.exports = router;
