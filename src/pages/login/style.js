import styled from 'styled-components';

export const LoginWrapper = styled.div`
    z-index: 0;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 56px;
    background: #f1f1f1;
`;

export const LoginBox = styled.div`
    width: 600px;
    padding: 50px 50px 30px;
    margin: 80px auto;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
`;

export const Input = styled.input`
    display: block;
    outline: none;
    width: 260px;
    height: 30px;
    line-height: 30px;
    padding: 4px 12px 4px 14px;
    border: 1px solid #c8c8c8;
    margin: 10px auto;
    color: #777;
    border-radius: 4px 4px 0 0;
`;

export const Button = styled.div`
    display: block;
    width: 260px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin: 20px auto;;
    padding: 9px 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    background: #3194d0;
`;