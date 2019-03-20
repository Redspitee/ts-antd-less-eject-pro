import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducers from './reducers/index';

import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(reducers,compose(
  applyMiddleware(thunk),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() 
));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
      </Switch>   
    </BrowserRouter>
  </Provider>, document.getElementById('root'));

serviceWorker.unregister();
