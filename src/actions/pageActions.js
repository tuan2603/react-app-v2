import * as types from '../constants/ActionTypes';
import {pageApi} from '../helpers';
import {show_notification} from './notifyActions';

export function loadPages() {
    return function (dispatch) {
        return pageApi.getAllPages().then(pages => {
            if (pages.response === true) {
                dispatch(loadPagesSuccess(pages.value));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadPagesSuccess(pages) {
    return {type: types.LOAD_PAGES_SUCCESS, pages};
}

export function updatePages(page) {
    return function (dispatch) {
        return pageApi.updatePage(page).then(responsePage => {
            if (responsePage.response === true) {
                dispatch(updatePageSuccess(responsePage.value));
                dispatch(show_notification({txt: "update thành công", type: "suc"}));
                return responsePage.value;
            } else {
                dispatch(show_notification({txt: responsePage.value, type: "err"}));
                return null;
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function updatePageSuccess(page) {
    return {type: types.UPDATE_PAGE_SUCCESS, page}
}


export function createPages(page) {
    return function (dispatch) {
        return pageApi.createPage(page).then(responsePage => {
            console.log(responsePage);
            if (responsePage.response === true) {
                dispatch(createPageSuccess(responsePage.value));
                dispatch(show_notification({txt: "insert thành công", type: "suc"}));
                return responsePage.value;
            } else {
                dispatch(show_notification({txt: responsePage.value, type: "err"}));
                return null;
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function createPageSuccess(page) {
    return {type: types.CREATE_PAGE_SUCCESS, page}
}

export function deletePages(page) {
    return function (dispatch) {
        return pageApi.deletePage(page).then(responsePage => {
            console.log("delete",responsePage);
            if (responsePage.response === true) {
                dispatch(deletePageSuccess(responsePage.value));
                dispatch(show_notification({txt: "delete thành công", type: "suc"}));
                return true;
            } else {
                dispatch(show_notification({txt: responsePage.value, type: "err"}));
                return false;
            }
        }).catch(error => {
            throw(error);
        });
    }
}

export function deletePageSuccess(page) {
    return {type: types.DELETE_PAGE_SUCCESS, page};
}
