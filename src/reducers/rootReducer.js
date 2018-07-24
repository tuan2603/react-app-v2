import { combineReducers } from 'redux';
import userReducers from './userReducers';
import notifyReducers from './notifyReducers';
import listReducers from './listReducers';
import toggletReducers from './toggletReducers';

const rootReducer = combineReducers({
    userReducers,
    notifyReducers,
    listReducers,
    toggletReducers
});

export default rootReducer;
