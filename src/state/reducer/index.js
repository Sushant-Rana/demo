/* eslint-disable no-undef */
import {combineReducers} from 'redux';
import amountReducer from './amountReducer';
import ProfileAdder from './profileChange';

const reducers= combineReducers({
    amount: amountReducer,
    profile: ProfileAdder
})

export default reducers;