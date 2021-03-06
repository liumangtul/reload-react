import {createStore,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

const store = createStore(
    reducer,
    applyMiddleware(
        thunk,
        createLogger()
    )
);

export default store;