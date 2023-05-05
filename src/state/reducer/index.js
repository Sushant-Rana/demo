/* eslint-disable no-undef */
import {combineReducers} from 'redux';
import amountReducer from './amountReducer';
import ProfileAdder from './profileChange';
import todoReducer from './todoReducer';
const reducers= combineReducers({
    amount: amountReducer,
    profile: ProfileAdder,
    todo: todoReducer
})

export default reducers;