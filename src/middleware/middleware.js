
/*
 * middleware 
 * log action when action is dispatched
 * 
*/
export const middleware = ({ getState, dispatch }) => next => action => {
    console.log("log middleware, action: " + action.type);
    next(action);
}