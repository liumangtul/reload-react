/*
import React from 'react';
import ReactDOM from 'react-dom';

//高阶组件
let wrapWithLoadData = (WrappedComponent,name)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data:null
            };
        }

        componentWillMount(){
            let data = localStorage.getItem(name);
            this.setState({data});
        }

        render(){
            return(
                <WrappedComponent data={this.state.data}/>
            )
        }
    }
    return NewComponent;
};


class App extends React.Component{
    render(){
        console.log(this,this.props,this.state)
        return(
            <section>
                <h1>{this.props.data.username}</h1>
            </section>
        )
    }
}

let NewApp = wrapWithLoadData(App,'username');

ReactDOM.render(
    <NewApp/>,
    document.getElementById('app')
);*/

/*
const appState = {
    title:{
        text:'React.js 小书',
        color:'red'
    },
    content:{
        text:'React.js 小书内容',
        color:'blue'
    }
};

function renderApp(appState){
    renderTitle(appState.title);
    renderContent(appState.content);
}

function renderTitle(title){
    const titleDOM = document.getElementById('title');
    titleDOM.innerHTML = title.text;
    titleDOM.style.color = title.color;
}

function renderContent(content){
    const contentDOM = document.getElementById('content');
    contentDOM.innerHTML = content.text;
    contentDOM.style.color = content.color;
}

function dispatch(action){
    switch(action.type){
        case 'UPDATE_TITLE_TEXT':
            appState.title.text = action.text;
            break;
        case 'UPDATE_TITLE_COLOR':
            appState.title.color = action.color;
            break;
        default:
            break;
    }
}


renderApp(appState);
dispatch({
    type:'UPDATE_TITLE_TEXT',
    text:'Promise'
});
dispatch({
    type:'UPDATE_TITLE_COLOR',
    color:'pink'
});
renderApp(appState);*/

/*
import {createStore} from 'redux';

//reducer
function counterReducer(state = 0,action){
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        break;
        case 'DECREMENT':
            return state-1;
        break;
        default:
            return state;
        break;
    }
}

//store
let store = createStore(counterReducer);

console.log(store.getState());
store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});*/

import { combineReducers } from 'redux';
import {
    VisibilityFilters,
    SET_VISIBILITY_FILTER,
    ADD_TODO,
    TOGGLE_TODO
} from './actions';

/*
 const initialState = {
    visibilityFilter:VisibilityFilters.SHOW_ALL,
    todos:[]
 };
function todoApp(state = initialState , action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{
                visibilityFilter:action.filter
            });
            break;
        case ADD_TODO:
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            });
            break;
        case TOGGLE_TODO:
            return Object.assign({},state,{
                todos:state.todos.map((todo,index)=>{
                    if(index == action.index){
                        return Object.assign({},todo,{
                            completed:!todo.completed
                        })
                    }
                    return todo;
                })
            });
            break;
        default:
            return state;
            break;

    }
}*/

function todos(state = [],action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ];
            break;
        case TOGGLE_TODO:
            return state.map((todo,index)=>{
                if(index == action.index){
                    return Object.assign({},todo,{
                        completed:!todo.completed
                    })
                }
                return todo;
            });
            break;
        default:
            return state;
            break;
    }
}

function VisibilityFilter(state = VisibilityFilters.SHOW_ALL,action){
    switch(action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
            break;
        default:
            return state;
            break;
    }
}

const todoApp = combineReducers(
    {
        VisibilityFilter,
        todos
    }
);
export default todoApp;