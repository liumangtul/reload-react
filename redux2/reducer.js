import {combineReducers} from 'redux';
import counter from './counter/reducer';
import todos from './todoList/reducer';

const reducer = combineReducers({
    counter,
    todos
});

export default reducer;