const {recipeService} = require('../services');

const createRecipe = async (req, res) => {
   try {
       const newRecipe = await recipeService.createRecipe(req.body);
       res.status(201).json(newRecipe);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
};

const getAllRecipes = async (req, res) => {
   try {
       const recipes = await recipeService.getAllRecipes();
       res.status(200).json(recipes);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};

const getRecipeById = async (req, res) => {
   try {
       const recipe = await recipeService.getRecipeById(req.params.id);
       if (!recipe) {
           return res.status(404).json({ message: "Recipe not found" });
       }
       res.status(200).json(recipe);
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};

const deleteRecipe = async (req, res) => {
   try {
       const deletedRecipe = await recipeService.deleteRecipe(req.params.id);
       if (!deletedRecipe) {
           return res.status(404).json({ message: "Recipe not found" });
       }
       res.status(200).json({ message: "Recipe deleted successfully" });
   } catch (error) {
       res.status(500).json({ message: error.message });
   }
};

const updateRecipe = async (req, res) => {
   try {
       const updatedRecipe = await recipeService.updateRecipe(req.params.id, req.body);
       if (!updatedRecipe) {
           return res.status(404).json({ message: "Recipe not found" });
       }
       res.status(200).json(updatedRecipe);
   } catch (error) {
       res.status(400).json({ message: error.message });
   }
};

module.exports = { createRecipe, getAllRecipes, getRecipeById, deleteRecipe, updateRecipe };
