const recipesRouter = require('express').Router();
const { getFakeRecipe, getFakeRecipes } = require('../api-mocks/recipes');

recipesRouter.get('/', getRecipesList);
recipesRouter.route('/:recipeId')
  .get(getRecipeById)
  .put(updateRecipe);

module.exports = recipesRouter;

function getRecipesList(req, res) {
  return res.json({recipes: getFakeRecipes(20)});
}

function getRecipeById(req, res) {
  return res.json(getFakeRecipe(req.params.recipeId));
}

function updateRecipe(req, res) {
  return res.json(req.body);
}
