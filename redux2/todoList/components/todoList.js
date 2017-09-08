import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Todo from './Todo';
import {showTodo} from '../action';

class TodoList extends React.Component{
    render(){
        const {
            todos
        } = this.props;
        return(
            <div>
                <h2>Todo List</h2>
                <ul>
                    {
                        todos.map((todo,index)=>{
                            return(
                                <Todo key={index} todo={todo}/>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state,props) =>{
    return {
        todos:state.todos
    }
};
const mapDispatchToProps = (dispatch,props) =>({
    ...bindActionCreators({
        showTodo
    },dispatch)
});

TodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);

export default TodoList;