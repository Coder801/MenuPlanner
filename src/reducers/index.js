import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cart from './cart.reducer';
import recipes from './recipes.reducer';
import menus from './menu.reducer';
import dishes from './dishes.reducer';
import settings from './settings.reducer';
import user from './user.reducer';

const appReducer = combineReducers({
  menus,
  dishes,
  recipes,
  cart,
  settings,
  user,
  routing: routerReducer
});

export default appReducer;
