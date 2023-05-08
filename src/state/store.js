//import {compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import Saga from './saga';
import thunk from 'redux-thunk';
import reducers from './reducer/index';
const sagaMWare=createSagaMiddleware();
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// eslint-disable-next-line no-undef
const store = configureStore({
    reducer: reducers,
    preloadedState: {},
    middleware: () => [
        sagaMWare,
        thunk
    ],
    //enhancers:[composeEnhancers]
}
)
sagaMWare.run(Saga);
export default store;