import { combineReducers } from 'redux';
import settings from './settings.reducer';
import user from './user.reducer';

const appReducer = combineReducers({
    settings,
    user
});

export default appReducer;
