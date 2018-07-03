import { ACCOUNT_LOGIN } from '../../actions/accountActions/actionName.js'

/*
*
* @param state: array // substate of store for home page
* @param action: action dispatched from Home component
*
*/
export default function accountReducers(state = {
    account: {
        accesstoken: ""
    }
}, action) {
    switch (action.type) {
        case ACCOUNT_LOGIN:
            return {
                ...state, account: {
                    ...state.account,
                    accesstoken: action.accesstoken
                }
            };
        default:
            return state;
    }
}