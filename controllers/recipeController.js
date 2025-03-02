const Recipe = require("../models/Recipe");

// Create a new recipe
exports.createRecipe = async (req, res) => {
  const { title, description, ingredients, instructions, time, image } = req.body;

  try {
    const recipe = await Recipe.create({
      title,
      description,
      ingredients,
      instructions,
      time,
      image,
      user: req.user.id,
    });

    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Error creating recipe" });
  }
};

// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("user", "name email");
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes" });
  }
};

// Update a recipe 

exports.updateRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    console.log("🔄 Update request received for recipe ID:", id);
    console.log("👤 Authenticated user ID:", req.user.id);
    console.log("📩 Request body:", req.body);

    let recipe = await Recipe.findById(id);
    if (!recipe) {
      console.log("❌ Recipe not found");
      return res.status(404).json({ message: "Recipe not found" });
    }

    if (recipe.user.toString() !== req.user.id) {
      console.log("🚫 User not authorized to update this recipe");
      return res.status(403).json({ message: "Not authorized to update this recipe" });
    }

    recipe = await Recipe.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    
    console.log("✅ Recipe updated successfully:", recipe);
    res.json(recipe);
  } catch (error) {
    console.error("❌ Error updating recipe:", error);
    res.status(500).json({ message: "Error updating recipe", error: error.message });
  }
};

// Delete a recipe
exports.deleteRecipe = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this recipe" });
    }

    await Recipe.findByIdAndDelete(id);
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe" });
  }
};
