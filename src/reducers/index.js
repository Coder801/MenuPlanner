import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cart from './cart.reducer';
import recipes from './recipes.reducer';
import menu from './menu.reducer';
import dishes from './dishes.reducer';
import settings from './settings.reducer';
import user from './user.reducer';

const appReducer = combineReducers({
  menu,
  dishes,
  recipes,
  cart,
  settings,
  user,
  routing: routerReducer
});

export default appReducer;
