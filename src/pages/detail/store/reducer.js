import { DETAIL_LIST_DATA } from './actionTypes';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    detailList: ''
})

export default (state = defaultState, action) => {
    switch(action.type) {
        case DETAIL_LIST_DATA:
            return state.set("detailList", action.detailList);
        default:
            return state;
    }
}