const faker = require('faker');

module.exports = {
  getFakeDish,
  getFakeDishes
};

function getFakeDish(id) {
  return {
    id,
    name: faker.commerce.productName(),
    gramms: faker.random.number(),
    proteins: faker.random.number(),
    carbohydrates: faker.random.number(),
    fats: faker.random.number()
  };
}

function getFakeDishes(count) {
  let i = 0;
  const fakeDishes = [];
  while (i < count) {
    const fakeDish = getFakeDish(++i);
    fakeDishes.push(fakeDish);
  }

  return fakeDishes;
}
