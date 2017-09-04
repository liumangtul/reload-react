import {createStore,combineReducers} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

//reducer
const reducer = (state = 0 ,action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

//store
const store = createStore(reducer);


//View
class Counter extends React.Component{
    onIncrement(){
        this.props.onIncrement();
    }

    onDecrement(){
        this.props.onDecrement();
    }

    render(){
        return(
            <div>
                <h1>{this.props.value}</h1>
                <button onClick={this.onIncrement.bind(this)}>+</button>
                <button onClick={this.onDecrement.bind(this)}>-</button>
            </div>
        )
    }
}
const render = ()=>{
    ReactDOM.render(
        <Counter
            value={store.getState()}
            onIncrement={()=>{store.dispatch({type:'INCREMENT'})}}
            onDecrement={()=>{store.dispatch({type:'DECREMENT'})}}
        />,
        document.getElementById('redux')
    );
};
render();
store.subscribe(render);

/*
* store 有三个方法
*  store.dispatch({type:'XXX'}) 改
*  store.getState();获取
*  store.subscribe（render |  react's setState方法）冲渲染View
* */