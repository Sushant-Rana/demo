import {applyMiddleware,createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import reducers from './reducer';

// eslint-disable-next-line no-undef
export const store= createStore(reducers,{},applyMiddleware(thunk))
