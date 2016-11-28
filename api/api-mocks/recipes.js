const faker = require('faker');

module.exports = {
  getFakeRecipe,
  getFakeRecipes
};

function getFakeRecipe (id) {
  return {
    id,
    name: faker.commerce.productName(),
    ingredients: faker.lorem.lines(),
    method: faker.lorem.paragraphs(),
    image: faker.image.food(),
    author: faker.name.findName(),
    date: faker.date.past()
  };
}

function getFakeRecipes (count) {
  const fakeRecipes = [];
  for (let i = 0; i < count; i++) {
    const fakeRecipe = getFakeRecipe(faker.random.uuid());
    fakeRecipes.push(fakeRecipe);
  }

  return fakeRecipes;
}
