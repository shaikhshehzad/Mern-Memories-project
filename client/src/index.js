import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // keeps the record   a container or a storage that stores and provides you with state or data.
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css'; // importing the css file in which we have svg background 
// creating the store which A store is a state container which holds the application's state. 
const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
