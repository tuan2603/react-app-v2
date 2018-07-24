import * as types from '../constants/ActionTypes';

export function login(username) {
    return {
        type: types.LOG_IN,
        username
    };
}

export function logout() {
    return {
        type: types.LOG_OUT,
    };
}