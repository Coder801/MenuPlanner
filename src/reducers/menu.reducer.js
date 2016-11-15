const initialState = [];

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_MENU_LIST':
    return [ ...action.menu ];
  default:
    return state;
  }
};

export default menuReducer;