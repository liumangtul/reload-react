import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import store from './store';
import Counter from './counter/View';
import TodoList from './todolist/component/TodoList';
import OriginData from './data/OriginData';


class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Router>
                        <div>
                            <ul>
                                <li><Link to="/">Counter</Link></li>
                                <li><Link to="/todolist">TodoList</Link></li>
                                <li><Link to="/data">OriginData</Link></li>
                            </ul>
                            <Route component={Counter} path="/" exact></Route>
                            <Route component={TodoList} path="/todolist"></Route>
                            <Route component={OriginData} path="/data"></Route>
                        </div>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default App;