import {combineReducers} from 'redux';
import {LOGGER} from './action';

const asynLog = (state = {message:'等待中'},action) =>{
    switch(action.type){
        case LOGGER:
            return state;
        case 'SUCC':
            return {
                message:action.message
            };
        default:
            return state;
    }
};

export default combineReducers({
    asynLog
});