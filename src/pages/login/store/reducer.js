import { fromJS } from 'immutable';
import { LOGIN_CHANGE, LOGOUT_CHANGE } from './actionTypes';
const defaultState = fromJS({
    isLogin: false
});

export default (state=defaultState, action) => {
    switch (action.type) {
        case LOGIN_CHANGE:
            return state.set("isLogin", action.isLogin)
        case LOGOUT_CHANGE:
            return state.set("isLogin", action.isLogin )
        default:
            return state;
    }
}