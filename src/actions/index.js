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
