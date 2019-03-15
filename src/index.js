import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './style.js';
import App from './App';

const Index = (
    <Fragment>
        <App/>
        <GlobalStyle />
    </Fragment>
)

ReactDOM.render(Index, document.getElementById('root'));
