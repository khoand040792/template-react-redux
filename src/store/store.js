import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers/rootReducer'
import { middleware } from '../middleware/middleware'
import thunk from 'redux-thunk'

const initState = {
    home: {
        count: 0
    },
    account: {
        accesstoken: '',
        isAuthenticated : false
    }
}

export const store = createStore(
    rootReducer,
    initState,
    applyMiddleware(
        middleware,
        thunk
    )
);
