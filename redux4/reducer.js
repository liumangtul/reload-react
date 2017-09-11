import {combineReducers} from 'redux';
import getCounter from './Temp/reducer';
import todos from './App/reducer';
const reducer = combineReducers({
    getCounter,
    todos
});

export default reducer;