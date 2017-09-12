import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {createLogger} from 'redux-logger'

const store = createStore(
    reducer,
    applyMiddleware(
        thunk,
        createLogger()
    )
);

export default store;