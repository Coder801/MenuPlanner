const faker = require('faker');

module.exports = {
  getFakeDays
};

function getFakeDish(id) {
  return {
    id,
    name: faker.commerce.productName(),
    gramms: faker.random.number(),
    proteins: faker.random.number(),
    carbohydrates: faker.random.number(),
    fats: faker.random.number(),
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

function getFakeDayMenu(dishes) {
  let i = 0;
  const fakeDayMenu = {};
  while (i < arguments.length) {
    fakeDayMenu[arguments[i]] = getFakeDishes(1);
    i++;
  }

  return fakeDayMenu;
}


function getFakeDays(count) {
  let i = 0;
  const dishes = ['Breakfast', 'Lunch', 'Dinner'];
  const fakeDays = [];
  const date = new Date();
  while (i < count) {
    fakeDays.push({
      [i]: getFakeDayMenu(...dishes)
    })
    i++;
  }

  return fakeDays;
}
