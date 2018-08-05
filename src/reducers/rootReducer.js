import { combineReducers } from 'redux';
import userReducers from './userReducers';
import notifyReducers from './notifyReducers';
import termsReducers from './termsReducers';
import introduceReducers from './introduceReducers';
import cats from './catReducers';

const rootReducer = combineReducers({
    userReducers,
    notifyReducers,
    termsReducers,
    introduceReducers,
    cats,
});

export default rootReducer;
