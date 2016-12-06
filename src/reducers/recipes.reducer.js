import { handleActions } from 'redux-actions';

const initialState = {
  selectedRecipe: null,
  list: []
};

export default handleActions({
  GET_RECIPES_LIST: (state, action) => ({ ...state, list: action.payload }),
  GET_RECIPE_DETAILS: (state, action) => ({ ...state, selectedRecipe: action.payload }),
  CLEAR_RECIPE_SELECTION: (state) => ({ ...state, selectedRecipe: null })
}, initialState);
