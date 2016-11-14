const menuRouter = require('express').Router();
const faker = require('faker');

menuRouter.get('/', getMenuList);

module.exports = menuRouter;

function getMenuList (req, res) {
  const fakeMenus = getFakeMenus(20);
  return res.json({menu: fakeMenus});
}

function getFakeMenus (count) {
  const fakeMenus = [];
  for (let i = 0; i < count; i++) {
    const fakeMenu = {
      id: faker.random.uuid(),
      name: faker.commerce.productName(),
      author: faker.name.findName(),
      date: faker.date.past()
    };
    fakeMenus.push(fakeMenu);
  }

  return fakeMenus;
}
