import { handleActions } from 'redux-actions';

const initialState = {
  list: []
};

export default handleActions({
  GET_CART_LIST: (state, action) => ({ ...state, list: action.payload }),
  TOGGLE_GROCERY_DONE: (state, action) => {
    const item = _.find(state.list, [ 'id', action.payload ]);
    const newList = _.reject(state.list, item);
    item.done = !item.done;
    newList.push(item);
    return { ...state, list: newList };
  }
}, initialState);
