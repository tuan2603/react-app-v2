import { combineReducers } from 'redux';
import userReducers from './userReducers';
import notifyReducers from './notifyReducers';
import listReducers from './listReducers';
import toggletReducers from './toggletReducers';
import termsReducers from './termsReducers';

const rootReducer = combineReducers({
    userReducers,
    notifyReducers,
    termsReducers
});

export default rootReducer;
