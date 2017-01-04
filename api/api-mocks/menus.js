const faker = require('faker');

module.exports = {
  getFakeDays
};

function getFakeDish(id) {
  return {
    id: id,
    name: faker.commerce.productName(),
    gramms: faker.random.number(),
    proteins: faker.random.number(),
    carbohydrates: faker.random.number(),
    fats: faker.random.number(),
  };
}

function getFakeDishes(count) {
  let i = 0;
  let dishes = [];
  while(i < count) {
    dishes.push(getFakeDish(i));
    i++;
  }

  return dishes;
}

function getFakeDayMenu(dishes) {
  let i = 0;
  const fakeDayMenu = {};
  while (i < arguments.length) {
    fakeDayMenu[arguments[i]] = getFakeDishes(faker.random.number({ min: 5, max: 8 }));
    i++;
  }

  return fakeDayMenu;
}

function getFakeDays(days) {
  let i = 0;
  const dishes = ['Breakfast', 'Lunch', 'Dinner'];
  const fakeDay = {};
  const fakeDays = {};
  while (i < arguments.length) {
    fakeDays[arguments[i]] = getFakeDayMenu(...dishes)
    i++;
  }

  return fakeDays;
}
