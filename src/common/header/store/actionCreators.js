import axios from 'axios';
import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const getListDatas = (list) => ({
    type: actionTypes.GET_LIST_DATA,
    list: fromJS(list),
    totalPage: Math.ceil(list.length / 10)
})

export const getFocusedAction = (isFocused) => ({
    type: actionTypes.INPUT_FOCUS_CHANGE,
    isFocused
})

export const getListAction = () => {
    return (disptach) => {
        axios.get('/api/headerList.json').then((res) => {
            const list = res.data;
            const action = getListDatas(list.data);
            disptach(action);
        }).catch(()=>{
            console.log("error");
        })
    }
}

export const getMouseInAction = (isMouseIn) => ({
    type: actionTypes.GET_MOUSE_CHANGE,
    mouseIn: isMouseIn
})

export const getPageAction = () => ({
    type: actionTypes.SET_PAGE_CHANGE
})