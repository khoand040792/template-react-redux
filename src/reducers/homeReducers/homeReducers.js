import { HOME_INCREASE_NUMBER } from '../../actions/homeActions/actionName.js'

/*
*
* @param state: array // substate of store for home page
* @param action: action dispatched from Home component
*
*/
export default function homeReducers(state = { count: 0}, action) {
    switch (action.type) {
        case HOME_INCREASE_NUMBER:
            return {...state, count: action.number + 1};
        default:
            return state;
    }
}