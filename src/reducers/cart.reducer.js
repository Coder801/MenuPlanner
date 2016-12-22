import { handleActions } from 'redux-actions';

const initialState = {
  list: []
};

export default handleActions({
  GET_CART_LIST: (state, action) => ({ ...state, list: action.payload }),
  TOGGLE_GROCERY_DONE: (state, action) => {
    const newList = [ ...state.list ];
    const itemIndex = _.findIndex(newList, [ 'id', action.payload ]);
    const item = newList.splice(itemIndex, 1)[0];
    item.done = !item.done;
    newList.push(item);
    return { ...state, list: newList };
  }
}, initialState);
