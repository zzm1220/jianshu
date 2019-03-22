import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';
import { actionCreators } from '../store';

class Recommends extends Component {
    render() {
        const { recommendLists } = this.props;
        console.log(recommendLists)
        if (recommendLists.size>0) {
            return (
                <RecommendWrapper>
                    {
                        recommendLists.map((item, index)=>{
                            return (
                                <RecommendItem key={item.get("id")}>
                                   <img 
                                     alt=""
                                     className="recommendImg"
                                     src={item.get("imgUrl")}
                                    />
                                </RecommendItem>
                            )
                        })
                    }
                </RecommendWrapper>
            );
        } else {
            return null;
        }
       
    }
    componentDidMount() {
        const { handleRecommendLists } = this.props;
        handleRecommendLists();
    }
}

const mapStateToProps = (state) => ({
    recommendLists: state.getIn(["home","recommendLists"])
});

const mapDispatchToProps = (dispatch) => ({
    handleRecommendLists() {
        dispatch(actionCreators.getRecommendListData())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Recommends);