const faker = require('faker');

module.exports = {
  getFakeCart
};

function getFakeCartItem (id) {
  return {
    id,
    name: faker.commerce.productName(),
    done: Math.random() > 0.5
  };
}

function getFakeCart (count) {
  const fakeCart = [];
  for (let i = 0; i < count; i++) {
    const fakeCartItem = getFakeCartItem(faker.random.uuid());
    fakeCart.push(fakeCartItem);
  }

  return fakeCart;
}
