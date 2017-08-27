import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import {BrowserRouter,Route,Link} from 'react-router-dom';
import App from './component/App';

React.render(
    <Router>
        <Route path="/" component={App}/>
    </Router>,
    document.getElementById('router')
);