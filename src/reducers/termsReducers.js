import {ADD_ITEM,REMOVE_ITEM} from '../constants/ActionTypes';

export default function termsReducers(state = null, action) {
    switch (action.type) {
        case ADD_ITEM:
            return action.terms;
        case REMOVE_ITEM:
            return null;
        default:
            return state;
    }
}
