const faker = require('faker');

module.exports = {
  getFakeMeals
};

function getFakeMenus (count) {
  const fakeMenus = [];
  for (let i = 0; i < count; i++) {
    const fakeMenu = {
      name: faker.commerce.productName(),
      gramms: faker.helpers.randomNumber(),
      proteins: faker.helpers.randomNumber(),
      carbohydrates: faker.helpers.randomNumber(),
      fats: faker.helpers.randomNumber()
    };
    fakeMeals.push(fakeMenu);
  }

  return fakeMeals;
}
