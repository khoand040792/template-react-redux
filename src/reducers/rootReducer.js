import { combineReducers } from 'redux';
import homeReducers from './homeReducers/homeReducers';
import accountReducers from './accountReducers/accountReducers';

export const rootReducer = combineReducers({
    home: homeReducers,
    account: accountReducers
})