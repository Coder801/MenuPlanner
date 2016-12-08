import { handleActions } from 'redux-actions';

const initialState = {
  selectedRecipe: null,
  list: []
};

export default handleActions({
  GET_DISHES_LIST: (state, action) => ({ ...state, list: action.payload.dishes })
}, initialState);
