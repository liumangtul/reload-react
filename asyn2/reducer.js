import getMessage from './simple/reducer';
import {combineReducers} from 'redux';

const reducer = combineReducers({
    data:getMessage
});

export default reducer;