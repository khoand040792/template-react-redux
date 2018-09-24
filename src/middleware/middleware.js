
/*
 * middleware 
 * log action when action is dispatched
 * 
*/
const pending = {};
export const middleware = ({ getState, dispatch }) => next => action => {
    if (action.type === 'HOME_SEARCH_TABLE') {
        const { debounce } = action.meta || {};
        if (!debounce) {
            return next(action);
        }
        if (pending[action.type]) {
            clearTimeout(pending[action.type]);
        }

        pending[action.type] = setTimeout(() => {
            delete pending[action.type];
            next(action);
        }, debounce);

    } else {
        next(action);
    }
}


