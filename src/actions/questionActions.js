import * as types from '../constants/ActionTypes';
import {questionApi} from '../helpers';
import {show_notification} from './notifyActions';

export function loadQuestion() {
    return function (dispatch) {
        return questionApi.getAll().then(questions => {
            if (questions.response === true) {
                dispatch(loadQuestionsSuccess(questions.value));
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function loadQuestionsSuccess(question) {
    return {type: types.LOAD_Q_SUCCESS, question};
}

export function updateQuestion(adver) {
    return function (dispatch) {
        return questionApi.update(adver).then(Adv => {
            if (Adv.response === true) {
                dispatch(updateAdvSuccess(Adv.value));
                dispatch(show_notification({txt: "update thành công", type: "suc"}));
                return Adv.value;
            } else {
                dispatch(show_notification({txt: Adv.value, type: "err"}));
                return null;
            }
        }).catch(error => {
            throw(error);
        });
    };
}


export function updateAdvSuccess(question) {
    return {type: types.UPDATE_Q_SUCCESS, question}
}


export function createAdver(adver) {
    return function (dispatch) {
        return questionApi.create(adver).then(repadver => {
            if (repadver.response === true) {
                dispatch(createAdvSuccess(repadver.value));
                dispatch(show_notification({txt: "insert thành công", type: "suc"}));
                return repadver.value;
            } else {
                dispatch(show_notification({txt: repadver.value, type: "err"}));
                return null;
            }
        }).catch(error => {
            throw(error);
        });
    };
}

export function createAdvSuccess(question) {
    return {type: types.CREATE_Q_SUCCESS, question}
}

export function deleteQuestion(adver) {
    return function (dispatch) {
        return questionApi.delete(adver).then(resAdver => {
            console.log("delete",resAdver);
            if (resAdver.response === true) {
                dispatch(deleteQuestionSuccess(resAdver.value));
                dispatch(show_notification({txt: "delete thành công", type: "suc"}));
                return true;
            } else {
                dispatch(show_notification({txt: resAdver.value, type: "err"}));
                return false;
            }
        }).catch(error => {
            throw(error);
        });
    }
}

export function deleteQuestionSuccess(question) {
    return {type: types.DELETE_Q_SUCCESS, question};
}
