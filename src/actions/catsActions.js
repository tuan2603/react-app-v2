import * as types from '../constants/ActionTypes';
import {getAllCats, updateCat, createCat} from '../helpers';

export function loadCats() {
    return function(dispatch) {
        return getAllCats().then(cats => {
            if (cats.response === true) {
                dispatch(loadCatsSuccess(cats.value));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadCatsSuccess(cats) {
    return {type: types.LOAD_CATS_SUCCESS, cats};
}

export function updateCats(cat) {
    return function (dispatch) {
        return updateCat(cat).then(responseCat => {
            if (responseCat.response === true) {
                dispatch(updateCatSuccess(responseCat.value));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function updateCatSuccess(cat) {
    return {type: types.UPDATE_CAT_SUCCESS, cat}
}

export function createCatSuccess(cat) {
    return {type: types.CREATE_CAT_SUCCESS, cat}
}

export function createCats(cat) {
    return function (dispatch) {
        return createCat(cat).then(responseCat => {
            if (responseCat.response === true) {
                dispatch(createCatSuccess(responseCat.value));
                return responseCat.value;
            }else{
                return null;
            }
        }).catch(error => {
            throw(error);
        });
    };
}