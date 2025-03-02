const express = require("express");
const {
  createRecipe,
  getAllRecipes,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController"); // ✅ Ensure the path is correct

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", protect, createRecipe); // Create a recipe
router.get("/", getAllRecipes); // Get all recipes
router.put("/:id", protect, updateRecipe); // Update a recipe
router.delete("/:id", protect, deleteRecipe); // Delete a recipe

module.exports = router;
