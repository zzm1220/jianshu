import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends Component {
    render() {
        const { isLogin, handlelogin } = this.props;
        console.log(isLogin)
        return (
            isLogin ? 
            (<Redirect to="/" />):
            (<LoginWrapper>
                <LoginBox>
                    <Input 
                        placeholder="账号"
                        ref={(input)=>{this.account=input}}
                    />
                    <Input 
                        placeholder="密码"
                        type="password"
                        ref={(input)=>{this.password=input}}
                    />
                    <Button onClick={
                        ()=> handlelogin(this.account, this.password)
                    }>
                        密码
                    </Button>
                </LoginBox>
            </LoginWrapper>)
        );
    }
}

const mapStateToProps = (state) => ({
    isLogin: state.getIn(["login","isLogin"])
});

const mapDispatchToProps = (dispatch) => ({
    handlelogin(accountElem, passwordElem) {
        dispatch(actionCreators.login(accountElem.value, passwordElem.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);