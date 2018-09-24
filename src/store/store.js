import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import { middleware } from '../middleware/middleware'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { GetTokenPersitant } from '../common/utilities/utilities';

const history = createBrowserHistory();

/**
 * Get token saved
 */
let tokenPersitance = GetTokenPersitant() || {
    accesstoken: '',
    isAuthenticated: false
};

const initState = {
    account: tokenPersitance,
    home: {
        count: 0,
        dataTables: []
    },
    ui: {
        loading: false
    }
}
/**
 * configure redux devtools
 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
/**
 * Export store
 */
export const store = createStore(
    connectRouter(history)(rootReducer),
    initState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            middleware,
            thunk
        )
    )
);
