export const setCurrentUser = (user) => {
  return {
    type: 'SET_CURRENT_USER',
    user
  };
};

export const setDefaultSettings = () => {
  return {
    type: 'SET_DEFAULT_SETTINGS'
  };
};

export const getRecipesList = (recipes) => {
  return {
    type: 'GET_RECIPES_LIST',
    recipes
  };
};

export const getRecipeDetails = (recipeId) => {
  return {
    type: 'GET_RECIPE_DETAILS',
    recipeId
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