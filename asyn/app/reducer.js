import {combineReducers} from 'redux';
import {FETCH_POSTS} from './action';

const initialState = {
    isFetching:false
};

const dataReducer = (
    state = initialState,
    action
)=>{
    switch(action.type){
        case FETCH_POSTS:
            switch(action.status){
                case 1:
                    return Object.assign({},state,{
                        isFetching:true
                    });
                case 2:
                    return Object.assign({},state,{
                        isFetching:false,
                        test:action.response.test
                    });
                case 3:
                    return Object.assign({},state,{
                        isFetching:false,
                        data:action.err
                    });
                default:
                    return {
                        ...state
                    };
            }
        default:
            return {
                ...state
            };
    }
};

const reducer = combineReducers({
    data:dataReducer
});

export default reducer;