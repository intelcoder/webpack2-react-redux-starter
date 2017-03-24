/**
 * Created by fiddlest on 3/24/2017.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route } from 'react-router'
import { ConnectedRouter} from 'react-router-redux'


import store, {history} from './store';
import App from './containers/App';


ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" component={App} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
