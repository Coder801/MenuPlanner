const menuRouter = require('express').Router();
const { getFakeMenus } = require('../api-mocks/menu');

menuRouter.get('/', getMenuList);
menuRouter.post('/add', addToMenu);

module.exports = menuRouter;

function getMenuList (req, res) {
  return res.json({menu: getFakeMenus(5)});
}

function addToMenu (req, res) {
  return res.json(req.body);
}
