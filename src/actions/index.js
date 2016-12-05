import { createActions } from 'redux-actions';

export default createActions(
  'SET_DEFAULT_SETTINGS',
  'GET_RECIPES_LIST'
);

export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
};

export const getRecipeDetails = (recipe) => {
  return {
    type: 'GET_RECIPE_DETAILS',
    recipe
  };
};

export const clearRecipeSelection = () => {
  return {  type: 'CLEAR_RECIPE_SELECTION' };
};

export const getMenu = (menu) => {
  return {
    type: 'GET_MENU',
    menu
  };
};
