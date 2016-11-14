const recipesRouter = require('express').Router();

recipesRouter.get('/', getRecipesList);

module.exports = recipesRouter;

function getRecipesList(req, res) {
  return res.json({recipes: [ 'First Recipe', 'Second Recipe' ]});
}
