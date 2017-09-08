import {combineReducers} from 'redux';
import counter from './counter/reducer';
import todos from './todolist/reducer';

export default combineReducers({
    counter,
    todos
});