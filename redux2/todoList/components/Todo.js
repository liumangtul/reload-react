import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Todo extends React.Component{
    render(){
        const {
            name,
            id,
            completed
        } = this.props;
        return(
            <li>
                ID: {id},Name: {name}
            </li>
        )
    }
}

Todo = connect(
    (state,props)=>{
        return{
            ...props.todo
        }
    },
    (dispatch,props)=>({
        ...bindActionCreators({

        })
    })
)(Todo);

export default Todo;