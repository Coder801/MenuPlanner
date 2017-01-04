const menusRouter = require('express').Router();
const { getFakeDays } = require('../api-mocks/menus');

menusRouter.get('/', getMenusList);

module.exports = menusRouter;

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday']

function getMenusList(req, res) {
  return res.json({menus: getFakeDays(...days)});
}
