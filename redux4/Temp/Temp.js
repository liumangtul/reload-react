import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {handleCrement} from './action';
import getCounter from './reducer';

const Temp = ({
    counter,
    handleCrement
}) =>{
    return(
        <section>
            <h1>Temp-counter</h1>
            <p>{counter}</p>
            <button onClick={()=>{return handleCrement(counter,'INCREMENT')}}>+</button>
            <button onClick={()=>{return handleCrement(counter,'DECREMENT')}}>-</button>
        </section>
    )
};

export default connect(
    state =>{
        return{
            counter:state.getCounter.counter
        }
    },
    dispatch =>({
        ...bindActionCreators({
            handleCrement
        },dispatch)
    })
)(Temp);
