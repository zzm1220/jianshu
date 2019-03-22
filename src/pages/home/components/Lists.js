import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, Content } from '../style';
import { actionCreators } from '../store';

class Lists extends Component {
    render() {
        const { articleLists } = this.props;
        if(articleLists.size>0) {
            return (
                <div>
                  {
                      articleLists.map((item, index) => {
                        return (
                            <Link to={"/detail/" + item.get("id") } key={item.get("id")}>
                                <ListItem >
                                    <Content>
                                        <h3>{ item.get("title") }</h3>
                                        <p>{ item.get("content") }</p>
                                    </Content>
                                    <img 
                                        src={item.get("imgUrl")} 
                                        alt="content-img"
                                        className="list-img"
                                    />
                                </ListItem>
                            </Link>
                        )
                      })
                  }
                </div>
            );
        } else {
            return null;
        }
    
    }
    componentDidMount() {
        const { handleArticle } = this.props;
        handleArticle();
    }
}

const mapStateToProps = (state) => ({
    articleLists: state.getIn(["home", "articleLists"])
});

const mapDispatchToProps = (dispatch) => ({
    handleArticle() {
        dispatch(actionCreators.getArticleListData())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Lists);