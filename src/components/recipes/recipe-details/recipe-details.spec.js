import { RecipeDetails } from './recipe-details';
import renderer from 'react-test-renderer';

const mockParams = {
  recipeId: '123'
};

it('[Recipe Details] shows preloader when recipe === null', () => {
  const component = renderer.create(
    <RecipeDetails recipe={null} params={mockParams} loadRecipe={jest.fn()} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
