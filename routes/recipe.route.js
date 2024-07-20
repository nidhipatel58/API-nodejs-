const express = require('express');
const route = express.Router();
const { recipeController } = require('../controller');

route.post('/create', recipeController.createRecipe);
route.get('/get/:id', recipeController.getAllRecipes);
route.get('/getrecipe', recipeController.getRecipeById);
route.delete('/delete/:id', recipeController.deleteRecipe);
route.put('/update/:id', recipeController.updateRecipe);

module.exports = route;