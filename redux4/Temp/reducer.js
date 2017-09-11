import {
    CREMENT,
    INCREMENT,
    DECREMENT
} from './action';

const initialState = {
    counter:0
};

const getCounter = (
    state = initialState,
    action
)=>{
    switch(action.type){
        case CREMENT:
            switch(action.filter){
                case INCREMENT:
                    return {
                        ...state,
                        counter:state.counter + 1
                    };
                case DECREMENT:
                    return {
                        ...state,
                        counter:state.counter - 1
                    };
                default:
                    return state;
            }
        default:
            return state;
    }
};

export default getCounter;