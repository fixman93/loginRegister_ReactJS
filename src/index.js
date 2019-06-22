import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { Provider } from 'react-redux'

const store = createStore(rootReducer, applyMiddleware(thunk))
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));

