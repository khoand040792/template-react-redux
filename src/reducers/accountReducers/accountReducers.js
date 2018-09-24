import { ACCOUNT_LOGIN } from '../../actions/accountActions/actionName.js'

/*
*
* @param state: array // substate of store for home page
* @param action: action dispatched from Home component
*
*/
export default function accountReducers(state = {}, action) {
    switch (action.type) {
        case ACCOUNT_LOGIN:
            return { ...state, accesstoken: action.accesstoken, isAuthenticated: true };
        default:
            return state;
    }
}