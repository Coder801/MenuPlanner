const recipesRouter = require('express').Router();
const { getFakeRecipes } = require('../api-mocks/recipes');

recipesRouter.get('/', getRecipesList);

module.exports = recipesRouter;

function getRecipesList(req, res) {
  return res.json({recipes: getFakeRecipes(20)});
}
