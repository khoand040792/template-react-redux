import { combineReducers } from 'redux';
import homeReducers from './homeReducers/homeReducers';
import accountReducers from './accountReducers/accountReducers';

const uiReducer = (state = {}, action) => {
    switch (action.type) {
        case "SHOW_SPINER_CALL_API":
            return { ...state, loading: true }
        case "DONE_API_HIDE_SPINER":
            return { ...state, loading: false }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    ui: uiReducer,
    home: homeReducers,
    account: accountReducers
})