import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import store from './store';
import Temp from './Temp/Temp';
import App from './App/App';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <section>
                <ul>
                    <li><Link to="/Temp">Temp</Link></li>
                    <li><Link to="/">Fetch</Link></li>
                </ul>
                <Route component={Temp} path="/Temp"></Route>
                <Route component={App} path="/" exact></Route>
            </section>
        </Router>
    </Provider>,
    document.getElementById('redux')
);