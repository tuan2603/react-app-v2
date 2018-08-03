import {ADD_ITEM} from "../constants/ActionTypes";

export function term_edit(terms) {
    return {
        type: ADD_ITEM,
        terms
    };
}
