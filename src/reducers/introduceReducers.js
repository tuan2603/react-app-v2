import {UPDATE_INTRODUCE,REMOVE_INTRODUCE} from '../constants/ActionTypes';

export default function introduceReducers(state = null, action) {
    switch (action.type) {
        case UPDATE_INTRODUCE:
            return action.introduce;
        case REMOVE_INTRODUCE:
            return null;
        default:
            return state;
    }
}
