import * as types from '../constants/ActionTypes';
import {getInfo, login} from "../helpers";
import {show_notification} from "./notifyActions";
import {getFromSession, removeSession, setInSession} from "../utils";
import {TOKEN} from "../constants/Users";

export function loadUser() {
    return function (dispatch) {
        if (getFromSession(TOKEN) !== null) {
            return getInfo().then(user => {
                if (user.response === true) {
                    dispatch(alogin(user.value));
                }
            }).catch(error => {
                throw(error);
            });
        }
    }
}

export function Login(obj) {
    return function (dispatch) {
        return login(obj).then(user => {
            if (user.response === true) {
                setInSession(TOKEN, user.value);
                dispatch(loadUser());
                dispatch(show_notification({txt: "Đăng nhập thành công", type: "suc"}));
                return true;
            } else {
                dispatch(show_notification({txt: "Tên hoặc mật khẩu không đúng", type: "err"}));
                return false;
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function alogin(username) {
    return {
        type: types.LOG_IN,
        username
    };
}

export function alogout() {

        removeSession(TOKEN);
        return {
            type: types.LOG_OUT,
        };

}
