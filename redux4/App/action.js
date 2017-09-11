import fetch from 'isomorphic-fetch';

const SHOW_TODO = 'SHOW_TODO';

const RequestTodo = (todos)=>{
    return{
        type:SHOW_TODO,
        todos
    }
};

const showTodo = ()=>{
    return dispatch =>{
        return fetch('./redux4/data.json')
            .then(res=>res.json())
            .then(json=>{
                dispatch(RequestTodo(json));
            })
    }
};

export {
    SHOW_TODO,
    showTodo
};