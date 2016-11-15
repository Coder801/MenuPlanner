import { combineReducers } from 'redux';
import recipes from './recipes.reducer';
import settings from './settings.reducer';
import user from './user.reducer';

const appReducer = combineReducers({
  recipes,
  settings,
  user
});

export default appReducer;
