const express = require("express");
const Recipe = require("../models/Recipe");

const router = express.Router();

// POST create a new recipe
router.post("/", async (req, res) => {
  try {
    const { title, description, category, ingredients, instructions, time, image } = req.body;

    if (!title || !description || !ingredients || !instructions || !time) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newRecipe = new Recipe({
      title,
      description,
      category: category || "Uncategorized",  // Default to "Uncategorized"
      ingredients,
      instructions,
      time,
      image
    });

    const savedRecipe = await newRecipe.save();
    res.status(201).json(savedRecipe);  // Return the created recipe
  } catch (error) {
    console.error("Error creating recipe:", error);
    res.status(500).json({ message: "Error creating recipe" });
  }
});

// GET all recipes
router.get("/", async (req, res) => {
  try {
    const recipes = await Recipe.find(); // Fetch all recipes from DB
    res.json(recipes); // Send the recipes back in the response
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching recipes" });
  }
});

// GET a single recipe by its ID
router.get("/:id", async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id); // Find the recipe by ID

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" }); // Handle case where recipe is not found
    }

    res.json(recipe); // Return the found recipe
  } catch (error) {
    console.error("Error fetching recipe by ID:", error);
    res.status(500).json({ message: "Error fetching recipe" });
  }
});

module.exports = router;
