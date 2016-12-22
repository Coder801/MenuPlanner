const recipesRouter = require('express').Router();
const { getFakeCart } = require('../api-mocks/cart');

recipesRouter.get('/', getCart);
recipesRouter.put('/:itemId', toggleGroceryItem);

module.exports = recipesRouter;

function getCart(req, res) {
  return res.json(getFakeCart(20));
}

function toggleGroceryItem(req, res) {
  return res.json(req.body);
}
