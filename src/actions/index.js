import { createActions } from 'redux-actions';

export default createActions(
  'SET_CURRENT_USER',
  'SET_DEFAULT_SETTINGS',
  'GET_RECIPES_LIST',
  'GET_RECIPE_DETAILS',
  'CLEAR_RECIPE_SELECTION'
);

export const getMenu = (menu) => {
  return {
    type: 'GET_MENU',
    menu
  };
};
