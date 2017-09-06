const SHOW_TODO = 'SHOW_TODO';

const showTodo = (todos)=>{
    return {
        type:SHOW_TODO,
        todos
    }
};

export {SHOW_TODO,showTodo};