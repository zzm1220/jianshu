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

export const SearchWrapper = styled.div`
    position: relative;
    margin-top: 9px;
    margin-left: 20px;
    font-size: 14px;
    float: left;
    .iconfont {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 15px;
        &.focused {
            background: #777;
            color: #fff;
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 240px;
    height: 38px;
    padding: 0 40px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 280px;
    }
    &.slide-enter {
        width: 240px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 280px;
    }
    &.slide-enter-done {
        width: 280px;
    }
    &.slide-exit {
        width: 280px;
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 240px;
    }
    &.slide-exit-done {
        width: 240px;
    }
`;

export const SearchInfo = styled.div`
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 48px;
    width: 248px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.div`
    float: right;
    font-size: 13px;
    cursor: pointer;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    text-align: center;
    color: #787878;
    border-radius: 3px;
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