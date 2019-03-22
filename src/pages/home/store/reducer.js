import { fromJS } from 'immutable';
import { TOPIC_LIST_VALUE, ARTICLE_LIST_VALUE, RECOMMEND_LIST_VALUE } from './actionTypes';

const defaultState = fromJS({
    topicLists: [],
    articleLists: [],
    recommendLists: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case TOPIC_LIST_VALUE:
            return state.set("topicLists", action.topicLists);
        case ARTICLE_LIST_VALUE:
            return state.set("articleLists", action.articleLists)
        case RECOMMEND_LIST_VALUE:
            return state.set("recommendLists", action.recommendLists)
        default:
            return state;
    }
}