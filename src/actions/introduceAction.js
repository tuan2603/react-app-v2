import {UPDATE_INTRODUCE} from "../constants/ActionTypes";

export function introduce_edit(introduce) {
    return {
        type: UPDATE_INTRODUCE,
        introduce
    };
}
