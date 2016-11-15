const initialState = [];

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_RECIPES_LIST':
    return [ ...action.recipes ];
  default:
    return state;
  }
};

export default recipesReducer;
