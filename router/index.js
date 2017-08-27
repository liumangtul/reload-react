import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import NavBar from './component/NavBar.js';
import App from './component/App.js';
import AboutUs from './component/AboutUs.js';
import Me from './component/Me.js';

ReactDOM.render(
    <Router>
        <div>
            <NavBar/>
            <Route path="/" component={App}/>
            <Route page="/AboutUs" component={AboutUs}/>
            <Route page="/Me" component={Me}/>
        </div>
    </Router>,
    document.getElementById('router')
);