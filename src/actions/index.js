import { createActions } from 'redux-actions';

export default createActions(
  'SET_CURRENT_USER',
  'SET_DEFAULT_SETTINGS',
  'GET_DISHES_LIST',
  'GET_RECIPES_LIST',
  'GET_RECIPE_DETAILS',
  'CLEAR_RECIPE_SELECTION',
  'GET_CART_LIST',
  'TOGGLE_GROCERY_DONE',
);
