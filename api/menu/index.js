const menuRouter = require('express').Router();
const { getFakeMenus } = require('../api-mocks/menu');

menuRouter.get('/', getMenuList);

module.exports = menuRouter;

function getMenuList (req, res) {
  const fakeMenus = getFakeMenus(5);
  return res.json({menu: fakeMenus});
}
