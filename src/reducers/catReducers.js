import {LOAD_CATS_SUCCESS, UPDATE_CAT_SUCCESS, CREATE_CAT_SUCCESS} from '../constants/ActionTypes';

export default function catReducer(state = null, action) {
    switch (action.type) {
        case LOAD_CATS_SUCCESS:
            return action.cats;
        case CREATE_CAT_SUCCESS:
            return [
                ...state.filter(cat => cat._id !== action.cat._id),
                Object.assign({}, action.cat)
            ];
        case UPDATE_CAT_SUCCESS:
            return [
                ...state.filter(cat => cat._id !== action.cat._id),
                Object.assign({}, action.cat)
            ];
        default:
            return state;
    }
}
