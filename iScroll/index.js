import IScroll from './iscroll-probe';
import React from 'react';
import ReactDOM from 'react-dom';
import List from './List/Components/List';

import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <List/>
    </Provider>,
    document.querySelector('#iScroll')
);