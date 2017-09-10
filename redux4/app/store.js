import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import reducer from './reducer';
import thunk from 'redux-thunk';

const log = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(
        thunk,
        log
    )
);

export default store;