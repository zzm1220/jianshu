import axios from 'axios';
import { fromJS } from 'immutable';
import { DETAIL_LIST_DATA } from './actionTypes';

const getDetailAction = (detailList) => ({
    type: DETAIL_LIST_DATA,
    detailList: fromJS(detailList)
})

export const getDetailData = (id)=> {
    return (dispatch) => {
        axios.get("/api/detail.json?"+id)
            .then((res)=>{
                dispatch(getDetailAction(res.data.data));
            }).catch(()=>{
                console.log("err");
            })
    }
}