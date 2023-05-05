import {applyMiddleware,createStore,compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducers from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// eslint-disable-next-line no-undef
export const store= createStore(reducers,{},composeEnhancers(applyMiddleware(thunk)))
