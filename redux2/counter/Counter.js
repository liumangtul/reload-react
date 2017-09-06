import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onIncrement,onDecrement} from './action';

class Counter extends React.Component{
    render(){
        const {
            counter,
            onIncrement,
            onDecrement
        } = this.props;
        return(
            <div>
                <h1>{counter}</h1>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
            </div>
        )
    }
}
const mapStateToProps = (state,props) =>{
    return {
        counter:state.counter
    }
};
const mapDispatchToProps = (dispatch,props) =>({
    ...bindActionCreators({
        onIncrement,
        onDecrement
    },dispatch)
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);;