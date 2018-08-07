import {ADD_ITEM} from "../constants/ActionTypes";
import {getAllCats, updateCat, createCat, updateCatImage, deleteCat} from '../helpers';
import {show_notification} from './notifyActions';

export function term_edit(terms) {
    return {
        type: ADD_ITEM,
        terms
    };
}
