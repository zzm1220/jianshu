import styled from 'styled-components';
import logoPic from '../../statics/logo.png';


export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    height: 56px;
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    box-sizing: border-box;
    width: 240px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 40px 0 20px;
    border: none;
    outline: none;
    font-size: 14px;
    border-radius: 19px;
    background: #eee;
    &::placeholder {
        color: #999;
    }
`;

export const Addition = styled.div`
    position: absolute;
    right: 60px;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    width: 80px;
    height: 38px;
    text-align: center;
    float: right;
    font-size: 14px;
    margin: 9px 5px 0 15px;
    line-height: 38px;
    border-radius: 20px;
    border: 1px solid rgba(236,97,73,.7);
    &.reg {
        background: #fff;
        color: #ea6f5a;
    }
    &.writing {
        background: #ea6f5a;
        color: #fff;
    }
`