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

export const getMenuList = (menu) => {
  return {
    type: 'GET_MENU_LIST',
    menu
  };
};

export const getMenuItem = (menuItem) => {
  return {
    type: 'GET_MENU_ITEM',
    menuItem
  };
};
