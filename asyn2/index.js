import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Simple from './simple/Simple';

ReactDOM.render(
    <Provider store={store}>
        <Simple/>
    </Provider>,
    document.getElementById('asyn')
);