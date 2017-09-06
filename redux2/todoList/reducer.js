import {SHOW_TODO} from './action';

const initialState = [
    {
        name:'html',
        id:0,
        completed:false
    },{
        name:'css',
        id:1,
        completed:false
    }
];

const todos = (state = initialState,action)=>{
    switch(action.type){
        case SHOW_TODO:
            return state;
        default:
            return state;
    }
};
export default todos;