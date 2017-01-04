const menusRouter = require('express').Router();
const { getFakeDays } = require('../api-mocks/menus');

menusRouter.get('/', getMenusList);

module.exports = menusRouter;


function getMenusList(req, res) {
  return res.json({menus: getFakeDays(4)});
}
