import * as types from '../constants/ActionTypes';

export function show_notification(txt) {
    return {
        type: types.SHOW_NOTIFICATION,
        txt
    };
}

export function hide_notification() {
    return {
        type: types.HIDE_NOTIFICATION,
    };
}
