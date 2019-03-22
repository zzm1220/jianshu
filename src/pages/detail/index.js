import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, DetailHeader, DetailContent } from './style';
import { actionCreators } from './store';

class Detail extends Component {
    render() {
        const { detailList } = this.props;
        console.log(this.props)
        if(detailList.size > 0) {
            return (
                <DetailWrapper>
                    <DetailHeader>
                       {detailList.get("detailHeader")}
                    </DetailHeader>
                    <DetailContent>
                        <img 
                            src={detailList.get("imgUrl")}
                            alt="detailPic"
                            className="detailPic"
                        />
                        <p dangerouslySetInnerHTML={{__html: detailList.get("contents")}}></p>
                    </DetailContent>
                </DetailWrapper>
            );
        } else {
            return null;
        }
       
    }
    componentDidMount() {
        const { handleDetailData, match } = this.props;
        console.log(match.params.id);
        handleDetailData(match.params.id);
    }
}

const mapStateToProp = (state) => ({
    detailList: state.getIn(['detail', 'detailList'])
});

const mapDispatchToProp = (dispatch) => ({
    handleDetailData(id) {
        dispatch(actionCreators.getDetailData(id));
    }
})
export default connect(mapStateToProp, mapDispatchToProp)(Detail);