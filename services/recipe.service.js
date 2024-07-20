const { recipeSchema } = require("../models");

const createRecipe = (body) => {
   console.log(body, "res");
   return recipeSchema.create(body);
};

const getAllRecipes = () => {
   return recipeSchema.find();
};

const getRecipeById = (id) => {
   return recipeSchema.findById(id);
};

const deleteRecipe = (id) => {
   return recipeSchema.findByIdAndDelete(id);
};

const updateRecipe = (id, body) => {
   return recipeSchema.findByIdAndUpdate(id, body);
};

module.exports = { createRecipe, getAllRecipes, getRecipeById, deleteRecipe, updateRecipe };