const faker = require('faker');

module.exports = {
  getFakeRecipes
};

function getFakeRecipes (count) {
  const fakeRecipes = [];
  for (let i = 0; i < count; i++) {
    const fakeRecipe = {
      id: faker.random.uuid(),
      name: faker.commerce.productName(),
      ingredients: faker.lorem.lines(),
      method: faker.lorem.paragraphs(),
      image: faker.image.food(),
      author: faker.name.findName(),
      date: faker.date.past()
    };
    fakeRecipes.push(fakeRecipe);
  }

  return fakeRecipes;
}
