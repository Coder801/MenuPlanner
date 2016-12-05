const initialState = {
  selectedRecipe: null,
  list: []
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_RECIPES_LIST':
    return { ...state, list: action.recipes };
  case 'GET_RECIPE_DETAILS':
    return { ...state, selectedRecipe: action.recipe };
  case 'CLEAR_RECIPE_SELECTION':
    return { ...state, selectedRecipe: null };
  default:
    return state;
  }
};

export default recipesReducer;
