const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe"); // MongoDB Model
const staticRecipes = require("../data/recipes"); // Static Recipes

// 📌 Get All Recipes (Static + MongoDB)
router.get("/", async (req, res) => {
  try {
    // Fetching dynamic recipes from MongoDB
    const dbRecipes = await Recipe.find();

    // Combine static + dynamic recipes
    const allRecipes = [...staticRecipes, ...dbRecipes];

    res.json(allRecipes);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

module.exports = router;
