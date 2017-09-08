import React,{Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import Counter from './counter/View';
import TodoList from './todolist/component/TodoList';

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <div>
                    <Counter/>
                    <TodoList/>
                </div>
            </Provider>
        )
    }
}

export default App;