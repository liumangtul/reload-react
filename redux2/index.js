import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import Counter from './counter/Counter';
import TodoList from './todoList/components/TodoList';

ReactDOM.render(
    <Provider store={store}>
        <div>
            <Counter/>
            <TodoList/>
        </div>
    </Provider>,
    document.getElementById('redux')
);