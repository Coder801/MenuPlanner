const menuRouter = require('express').Router();

menuRouter.get('/', getMenuList);

module.exports = menuRouter;

function getMenuList(req, res) {
  return res.json({menu: [ 'First Dish', 'Second Dish' ]});
}
