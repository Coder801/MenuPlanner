import { combineReducers } from 'redux';
import recipes from './recipes.reducer';
import menu from './menu.reducer';
import dishes from './dishes.reducer';
import settings from './settings.reducer';
import user from './user.reducer';

const appReducer = combineReducers({
  menu,
  dishes,
  recipes,
  settings,
  user
});

export default appReducer;
