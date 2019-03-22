import axios from 'axios';
import { LOGIN_CHANGE, LOGOUT_CHANGE } from './actionTypes';

const loginAction = (status) => ({
    type: LOGIN_CHANGE,
    isLogin: status
});

export const login = (account, password) => {
    return (dispatch) => {
        axios.get("/api/login.json?account=" + account + "&password=" + password)
            .then((res)=>{
                const status = res.data.data;
                dispatch(loginAction(status));
            })
            .catch(()=>{
                console.log("登录失败");
            })
    }
}

export const logoutAction = () => ({
    type: LOGOUT_CHANGE,
    isLogin: false
})