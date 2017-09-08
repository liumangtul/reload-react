import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {
    onIncrement,
    onDecrement
} from './action';

class Counter extends Component{
    render(){
        const {
            counter,
            onIncrement,
            onDecrement
        } = this.props;
        return(
            <section>
                <h1>COUNTER</h1>
                <p>{counter}</p>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </section>
        )
    }
}

export default connect(
    (state)=>{
        return{
            counter:state.counter
        }
    },
    (dispatch)=>({
        ...bindActionCreators({
            onIncrement,
            onDecrement
        },dispatch)
    })
)(Counter);