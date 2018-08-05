import {LOAD_CATS_SUCCESS} from '../constants/ActionTypes';

export default function catReducer(state = null, action) {
    switch(action.type) {
        case LOAD_CATS_SUCCESS:
            return action.cats;
        default:
            return state;
    }
}
