import { HIDE_NOTIFICATION , SHOW_NOTIFICATION} from '../constants/ActionTypes';

export default function notifyReduces(state = null, action) {
    switch (action.type) {
        case SHOW_NOTIFICATION:
            return action.txt;
        case HIDE_NOTIFICATION:
            return null;
        default:
            return state;
    }
}
