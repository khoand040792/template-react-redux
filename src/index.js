
import React from 'react';
import { render } from 'react-dom';
import { store } from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomeContainer } from './components/home/homeContainer';
import { AccountContainer } from './components/account/accountContainer';
import registerServiceWorker from './registerServiceWorker';
import './styles/main.css';
import './styles/font-awesome.min.css'
import './styles/AdminLTE.min.css'
import './styles/_all-skins.min.css'

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/login" component={AccountContainer} />
        <Route component={() => (
          <div className="wrapper text-center">
            <img src={require('./styles/img/not_found_page.jpg')} alt="Page Not Found 404" height="100%" width="100%" />
          </div>
        )} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();