import {CAT_IS_EDIT} from '../constants/ActionTypes';

export default function editCatReduces(state = false, action) {
    switch (action.type) {
        case CAT_IS_EDIT:
            return !state;
        default:
            return state;
    }
}
