import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import assetsMiddleWare from './redux/middleware/index';
import rootReducer from './redux/index';
import App from './components/App/App';

const middleware = applyMiddleware(assetsMiddleWare);
const store = createStore(rootReducer, middleware);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
