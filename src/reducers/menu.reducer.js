import { handleActions } from 'redux-actions';

const initialState = {
  list: []
};

export default handleActions({
  GET_MENUS_LIST: (state, action) => ({ ...state, list: action.payload.menus })
}, initialState);
