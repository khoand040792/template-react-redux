import { HOME_INCREASE_NUMBER } from '../../actions/homeActions/actionName.js'

/*
*
* @param state: array // substate of store for home page
* @param action: action dispatched from Home component
*
*/
export default function homeReducers(state = {}, action) {
    switch (action.type) {
        case HOME_INCREASE_NUMBER:
            return { ...state, count: action.number + 1 };
        case "HOME_SEARCH_TABLE":
            let rewDatatables = [];
            rewDatatables.push(action.payload);
            return { ...state, dataTables: rewDatatables }
        default:
            return state;
    }
}