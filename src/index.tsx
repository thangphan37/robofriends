import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import './index.css';
import 'tachyons';
import { searchRobots, requestRobots } from './reducer';

const rootReducers = combineReducers({searchRobots, requestRobots});
const store = createStore(rootReducers, applyMiddleware(thunk, logger));
export type RootState = ReturnType<typeof rootReducers>
export type AppDispatch = typeof store.dispatch;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

