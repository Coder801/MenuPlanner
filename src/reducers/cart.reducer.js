import { handleActions } from 'redux-actions';

const initialState = {
  list: []
};

export default handleActions({
  GET_CART_LIST: (state, action) => ({ ...state, list: sortGroceryList(action.payload) }),
  TOGGLE_GROCERY_DONE: (state, action) => {
    const newList = [ ...state.list ];
    const item = _.find(newList, [ 'id', action.payload ]);
    item.done = !item.done;
    return { ...state, list: sortGroceryList(newList) };
  }
}, initialState);

function sortGroceryList (list) {
  return _.sortBy(list, [ 'done', 'name' ]);
}
