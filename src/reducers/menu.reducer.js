const initialState = [];

const menuReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'GET_MENU':
    return [ ...action.menu ];
  default:
    return state;
  }
};

export default menuReducer;