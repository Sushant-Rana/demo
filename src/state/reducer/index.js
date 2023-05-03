/* eslint-disable no-undef */
import {combineReducers} from 'redux';
import amountReducer from './amountReducer';
import ProfileSwitcher from './profileChange';

const reducers= combineReducers({
    amount: amountReducer,
    profile: amountReducer
})

export default reducers;