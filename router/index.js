import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
import NavBar from './component/NavBar.js';
import App from './component/App.js';
import AboutUs from './component/AboutUs.js';
import Me from './component/Me.js';

ReactDOM.render(
    <Router>
        <div>
            <NavBar/>
            <Route exact path="/router/" component={App}/>
            <Route path="/router/AboutUs" component={AboutUs}/>
            <Route path="/router/Me" component={Me}/>
        </div>
    </Router>,
    document.getElementById('router')
);