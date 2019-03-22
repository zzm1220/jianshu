import axios from 'axios';
import { fromJS } from 'immutable';
import { TOPIC_LIST_VALUE,  ARTICLE_LIST_VALUE, RECOMMEND_LIST_VALUE} from './actionTypes';

const getTopicsListAction = (topicLists) => ({
    type: TOPIC_LIST_VALUE,
    topicLists: fromJS(topicLists)
})

const getArticleListAction = (articleLists) => ({
    type: ARTICLE_LIST_VALUE,
    articleLists: fromJS(articleLists)
})

const getRecommendListAction = (recommendLists) => ({
    type: RECOMMEND_LIST_VALUE,
    recommendLists: fromJS(recommendLists)
})

export const getTopicListData = () => {
    return (dispatch) => {
        axios.get("/api/topicList.json")
            .then((res)=>{
                const topicLists = res.data.data;
                const action = getTopicsListAction(topicLists);
                dispatch(action);
            }).catch(()=>{
                console.log("err");
            })
    }
}

export const getArticleListData = () => {
    return (dispatch) => {
        axios.get("/api/articleList.json") 
            .then((res)=>{
                const articleLists = res.data.data;
                const action = getArticleListAction(articleLists);
                dispatch(action);
            }).catch(()=>{
                console.log("err");
            })
    }
}

export const getRecommendListData = () => {
    return (dispatch) => {
        axios.get("/api/recommendList.json")
            .then((res)=>{
                dispatch(getRecommendListAction(res.data.data));
            })
            .catch(()=>{
                console.log("err");
            })
    }
}