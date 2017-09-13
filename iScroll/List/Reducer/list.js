import {
    LIST_PENDING,
    LIST_SUCCESS,
    LIST_ERROR
} from '../Action/list';

const list = (state={},action)=>{
    switch(action.type){
        case LIST_PENDING:
            return {
                ...state,
                status:0
            };
        case LIST_SUCCESS:
            return {
                ...state,
                ...action,
                status:1
            };
        case LIST_ERROR:
            return {
                ...state,
                status:2
            };
        default:
            return state;
    }
};

export default list;