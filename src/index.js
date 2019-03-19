import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import GlobalStyle from './style.js';
import GlobalIconFont from './statics/iconfont/iconfont';
import App from './App';

const Index = (
    <Provider store={store}>
        <App/>
        <GlobalStyle />
        <GlobalIconFont />
    </Provider>
)

ReactDOM.render(Index, document.getElementById('root'));
