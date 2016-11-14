const faker = require('faker');

module.exports = {
  getFakeMenus
};

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
