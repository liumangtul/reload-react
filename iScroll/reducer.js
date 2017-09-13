import {combineReducers} from 'redux';
import list  from './List/Reducer/list';

const reducer = combineReducers({
    list
});

export default reducer;