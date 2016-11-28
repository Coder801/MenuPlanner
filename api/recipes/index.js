const recipesRouter = require('express').Router();
const { getFakeRecipe, getFakeRecipes } = require('../api-mocks/recipes');

recipesRouter.get('/', getRecipesList);
recipesRouter.get('/:recipeId', getRecipeById);

module.exports = recipesRouter;

function getRecipesList(req, res) {
  return res.json({recipes: getFakeRecipes(20)});
}

function getRecipeById(req, res) {
  return res.json(getFakeRecipe(req.params.recipeId));
}
