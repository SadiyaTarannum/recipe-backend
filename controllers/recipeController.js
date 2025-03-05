const Recipe = require("../models/Recipe");
const staticRecipes = require("../data/recipe"); // Import static recipes

// ✅ Create a new recipe (MongoDB)
exports.createRecipe = async (req, res) => {
  try {
    console.log("📥 Received recipe data:", req.body);
    console.log("👤 Authenticated User:", req.user); // Ensure req.user is valid

    const { title, category, ingredients, instructions, image } = req.body;

    if (!title || !category || !ingredients || !instructions) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newRecipe = new Recipe({
      title,
      category,
      ingredients: typeof ingredients === "string" ? ingredients.split(",") : ingredients,
      instructions,
      image,
      user: req.user.id, // Ensure user is authenticated
    });

    await newRecipe.save();
    console.log("✅ Recipe saved:", newRecipe);

    res.status(201).json(newRecipe);
  } catch (error) {
    console.error("❌ Error creating recipe:", error);
    res.status(500).json({ message: "Error creating recipe", error: error.message });
  }
};

// ✅ Get all recipes (MongoDB + Static Recipes)
exports.getAllRecipes = async (req, res) => {
  try {
    const dbRecipes = await Recipe.find().populate("user", "name email"); // Fetch from DB
    const allRecipes = [...staticRecipes, ...dbRecipes]; // Merge static + database recipes

    res.json(allRecipes);
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipes", error: error.message });
  }
};

// ✅ Get a single recipe (MongoDB + Static)
exports.getSingleRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (recipe) return res.json(recipe);

    // If not in DB, check static recipes
    const staticRecipe = staticRecipes.find((r) => r.id === req.params.id);
    if (staticRecipe) return res.json(staticRecipe);

    res.status(404).json({ message: "Recipe not found" });
  } catch (error) {
    res.status(500).json({ message: "Error fetching recipe", error: error.message });
  }
};

// ✅ Update a recipe (Only by the owner)
exports.updateRecipe = async (req, res) => {
  try {
    let recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to update this recipe" });
    }

    recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: "Error updating recipe", error: error.message });
  }
};

// ✅ Delete a recipe (Only by the owner)
exports.deleteRecipe = async (req, res) => {
  try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    if (recipe.user.toString() !== req.user.id) {
      return res.status(403).json({ message: "Not authorized to delete this recipe" });
    }

    await Recipe.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting recipe", error: error.message });
  }
};
