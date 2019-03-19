import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.INPUT_FOCUS_CHANGE:
            return state.set("focused", action.isFocused)
        case actionTypes.GET_LIST_DATA:
            return state.merge({
                list: action.list,
                totalPage: action.totalPage
            });
        case actionTypes.GET_MOUSE_CHANGE:
            return state.set("mouseIn", action.mouseIn)
        case actionTypes.SET_PAGE_CHANGE:
            let page = state.get("page");
            const totalPage = state.get("totalPage");
            if (page < totalPage) {
                page++;
            } else {
                page = 1;
            }
            return state.set("page", page);
        default:
            return state;
    }
}