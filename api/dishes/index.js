const dishesRouter = require('express').Router();
const { getFakeDish, getFakeDishes } = require('../api-mocks/dishes');

dishesRouter.get('/', getDishesList);

module.exports = dishesRouter;

function getDishesList(req, res) {
  return res.json({dishes: getFakeDishes(5)});
}