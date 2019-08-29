import React                  from 'react';
import ReactDOM               from 'react-dom';
import { BrowserRouter }      from 'react-router-dom';
import {
  applyMiddleware,
  compose,
  createStore,
}                             from 'redux';
import thunk                  from 'redux-thunk';
import { Provider }           from 'react-redux';

import 'semantic-ui-css-offline';

import App                    from './App';
import registerServiceWorker  from './registerServiceWorker';
import reducer                from './reducers';

const emptyState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // For use with Chrome Dev tools: https://github.com/zalmoxisus/redux-devtools-extension#usage
const store = createStore(
  reducer,
  emptyState,
  composeEnhancers(applyMiddleware(thunk)),
);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));

registerServiceWorker();
