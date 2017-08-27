import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router';
import {hashHistory} from 'react-router-dom';
import App from './component/App';

React.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('router')
);