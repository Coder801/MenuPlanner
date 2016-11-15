import { combineReducers } from 'redux';
import recipes from './recipes.reducer';
import menu from './menu.reducer';
import settings from './settings.reducer';
import user from './user.reducer';

const appReducer = combineReducers({
  menu,
  recipes,
  settings,
  user
});

export default appReducer;
