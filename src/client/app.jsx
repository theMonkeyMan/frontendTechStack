import 'babel-polyfill';

import React from 'react';

import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import { combineReducers } from 'redux-immutable';

import dogReducer from './reducers/dog-reducer';

import BarkMessage from './containers/bark-message';

import BarkButton from './containers/bark-button';

import Wechat from './components/wechat';

import logMiddle from './applyMiddlewares/logMiddle';

import secondMiddle from './applyMiddlewares/secondMiddle';

const diy_createStore = applyMiddleware(logMiddle, secondMiddle)(createStore);

const store = diy_createStore(combineReducers({
  dog: dogReducer,
}));

ReactDOM.render(
  <Provider store={store}>
    <div>
      <BarkMessage />
      <BarkButton isBark={store.getState().hasBarked} />
      <Wechat />
    </div>
  </Provider>
  ,
  document.querySelector('.app')
)
