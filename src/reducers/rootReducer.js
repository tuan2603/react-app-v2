import { combineReducers } from 'redux';
import userReducers from './userReducers';
import notifyReducers from './notifyReducers';
import termsReducers from './termsReducers';
import introduceReducers from './introduceReducers';
import cats from './catReducers';
import pages from './pageReducers';
import adver from './advertiseReducers';
import questions from './questionReducers';
import testimonials from './testimonialReducers';

const rootReducer = combineReducers({
    userReducers,
    notifyReducers,
    termsReducers,
    introduceReducers,
    cats,
    pages,
    adver,
    questions,
    testimonials,
});

export default rootReducer;
