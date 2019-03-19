import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    Addition,
    Button
} from './style.js';
import { actionCreators } from './store';

class Header extends Component {
    getSearchArea() {
        const { list, mouseIn, focused, page, handleMouseEnter, handleMouseLeave, handlePage } = this.props;
        const jsList = list.toJS();
        const pageList = [];
        if (jsList.length) {
            for (let i=(page-1)*10;i<page*10;i++) {
                pageList.push(
                    <SearchInfoItem key={jsList[i]}>
                        {jsList[i]}
                    </SearchInfoItem>
                )
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo 
                    onMouseEnter={ handleMouseEnter }
                    onMouseLeave = { handleMouseLeave }
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={ handlePage }>
                        换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <div>
                        {
                            pageList
                        }
                    </div>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }
    render() {
        const { focused, list, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavItem className="right">登录</NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused ? 'focused' : ' '}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe623;</i>
                        {this.getSearchArea(focused)}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writing">
                        <span className="iconfont">&#xe604;</span>
                        <span>写文章</span>
                    </Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(["header", "focused"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"])
});

const mapDispatchToProps = (dispatch) => ({
    handleInputFocus: function (list) {
        list.size === 0 && dispatch(actionCreators.getListAction());
        dispatch(actionCreators.getFocusedAction(true));
    },
    handleInputBlur: function () {
        const action = actionCreators.getFocusedAction(false);
        dispatch(action);
    },
    handleMouseEnter: function() {
        dispatch(actionCreators.getMouseInAction(true))
    },
    handleMouseLeave: function() {
        dispatch(actionCreators.getMouseInAction(false))
    },
    handlePage: function() {
        dispatch(actionCreators.getPageAction());
    }
})

Header = connect(mapStateToProps, mapDispatchToProps)(Header);

export default Header;