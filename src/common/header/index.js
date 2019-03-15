import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo, 
    Nav, 
    NavItem, 
    NavSearch, 
    Addition,
    Button
} from './style.js'

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left">首页</NavItem>
                    <NavItem className="left">下载APP</NavItem>
                    <NavItem className="right">Aa</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavSearch />
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writing">写文章</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}

export default Header;