import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {showTodo} from './action';

class App extends React.Component{
    componentWillMount(){
        this.props.showTodo();
    }
    render(){
        const {
            todos
        } = this.props;
        return(
            <section>
                <h1>App</h1>
                <ul>
                    {
                        todos.data.map((todo,index)=>{
                            return (
                                <li key={index}>
                                    {todo.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        )
    }
}

export default connect(
    state =>{
        return{
            todos:state.todos
        }
    },
    dispatch =>({
        ...bindActionCreators({
            showTodo
        },dispatch)
    })
)(App);