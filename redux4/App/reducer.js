import {SHOW_TODO} from './action';

const initialState = {
    isFetching:false,
    data:[]
};

const todos = (state = initialState,action)=>{
    console.log(state,action);
    switch(action.type){
        case SHOW_TODO:
            return action.todos;
        default:
            return state;
    }
};

export default todos;