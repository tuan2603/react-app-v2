import {LOAD_PAGES_SUCCESS, UPDATE_PAGE_SUCCESS, CREATE_PAGE_SUCCESS, DELETE_PAGE_SUCCESS} from '../constants/ActionTypes';
// import {history} from "../helpers";

export default function pageReducer(state = null, action) {
    switch (action.type) {
        case LOAD_PAGES_SUCCESS:
            return action.pages;
        case CREATE_PAGE_SUCCESS:
            return [
                ...state.filter(page => page._id !== action.page._id),
                Object.assign({}, action.page)
            ];
        case UPDATE_PAGE_SUCCESS:
            return [
                ...state.filter(page => page._id !== action.page._id),
                Object.assign({}, action.page)
            ];
        case DELETE_PAGE_SUCCESS: {
            const newState = Object.assign([], state);
            const indexOfCatToDelete = state.findIndex(page => {
                return page._id === action.page._id
            })
            newState.splice(indexOfCatToDelete, 1);
            //history.push('/page-pageegories.html');
            return newState;
        }
        default:
            return state;
    }
}
