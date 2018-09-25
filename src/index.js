
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
import Header from './common/component/Header'
import Sidebar from './common/component/Sidebar'
import './styles/main.css';
import './styles/AdminLTE.min.css'
import './styles/_all-skins.min.css'
import './styles/font-awesome.min.css'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    store.getState().account.isAuthenticated === true
      ? <div className="wrapper" >
        <Header />
        <Sidebar />
        <Component {...props} />
      </div> :
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
)
const history = createBrowserHistory();

// fake component
const ABC = () => (
  <div className="content-wrapper">abc componet</div>
)

const NotFoundPage = () => (
  <div className="wrapper text-center">
    <img src={require('./styles/img/not_found_page.jpg')}
      alt="Page Not Found 404"
      height="100%"
      width="100%"
    />
  </div>
)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/login" component={AccountContainer} />
        <PrivateRoute exact path='/' component={HomeContainer} />
        <PrivateRoute exact path='/forecast' component={ABC} />
        <Route component={NotFoundPage} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();