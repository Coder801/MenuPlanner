const faker = require('faker');

module.exports = {
  getFakeMenus
};

function getFakeMenus(count) {
  const fakeMenus = [];
  for (let i = 0; i < count; i++) {
    const fakeMenu = {
      name: faker.commerce.productName(),
      gramms: faker.random.number(),
      proteins: faker.random.number(),
      carbohydrates: faker.random.number(),
      fats: faker.random.number()
    };
    fakeMenus.push(fakeMenu);
  }

  return fakeMenus;
}
