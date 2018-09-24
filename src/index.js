
import React from 'react';
import { render } from 'react-dom';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { Route, Redirect, Switch } from 'react-router-dom';
import { HomeContainer } from './components/home/homeContainer';
import { AccountContainer } from './components/account/accountContainer';
import registerServiceWorker from './registerServiceWorker';
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'
import './styles/main.css';
import './styles/font-awesome.min.css'
import './styles/AdminLTE.min.css'
import './styles/_all-skins.min.css'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    store.getState().account.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)
const history = createBrowserHistory();

const ABC = () => (
  <div>abc componet</div>
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={AccountContainer} />
        <PrivateRoute exact path='/' component={HomeContainer} />
        <PrivateRoute exact path='/forecast' component={ABC} />
        <Route component={() => (
          <div className="wrapper text-center">
            <img src={require('./styles/img/not_found_page.jpg')} alt="Page Not Found 404" height="100%" width="100%" />
          </div>
        )} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();