import 'babel-polyfill';

import React from 'react';

import ReactDOM from 'react-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux';

import {Provider} from 'react-redux';

import dogReducer from './reducers/dog-reducer';

import BarkMessage from './containers/bark-message';

import BarkButton from './containers/bark-button';

import logMiddle from './applyMiddlewares/logMiddle';

const diy_createStore = applyMiddleware(logMiddle)(createStore);

const store = diy_createStore(combineReducers({
  dog: dogReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton isBark={store.getState().hasBarked} />
    </div>
  </Provider>
  ,
  document.querySelector('.app')
)