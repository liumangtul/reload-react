import {
    FETCH_ENTRY_PENDING,
    FETCH_ENTRY_SUCCESS,
    FETCH_ENTRY_FAILD
} from './action';

const getMessage = (state ={},action)=>{
    switch(action.type){
        case FETCH_ENTRY_PENDING:
            return{
                ...state,
                isFetching:true,
                status:1
            };
        case FETCH_ENTRY_SUCCESS:
            return{
                ...state,
                isFetching:false,
                status:2,
                mes:action.data.mes
            };
        case FETCH_ENTRY_FAILD:
            return{
                ...state,
                isFetching:false,
                status:3
            };
        default:
            return state;
    }
};

export default getMessage;