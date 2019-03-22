import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';
import { actionCreators } from '../store';

class Topics extends Component {
    render() {
        const { topicLists } = this.props;
        return (
            <TopicWrapper>
                {
                   topicLists.map((item, index) => {
                       return (
                         <TopicItem key={item.get('id')}>
                            <img 
                             alt="pic"
                             className="topicPic"
                                src={item.get('imgUrl')}
                            />
                            {item.get('title')}
                        </TopicItem>
                       )
                   }) 
                }
            </TopicWrapper>
        );
    }
    componentDidMount() {
        const { handleTopicList} = this.props;
        handleTopicList();
    }
}

const mapStateToProps = (state) => ({
    topicLists: state.getIn(['home','topicLists'])
});

const mapDispatchToProps = (dispatch) => ({
    handleTopicList() {
        dispatch(actionCreators.getTopicListData());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Topics);