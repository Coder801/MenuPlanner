const menuRouter = require('express').Router();
const { getFakeMenus } = require('../api-mocks/menu');

menuRouter.get('/', getMenuList);

module.exports = menuRouter;

function getMenuList (req, res) {
  return res.json({menu: getFakeMenus(5)});
}
