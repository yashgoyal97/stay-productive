import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import StayProductive from './stay-productive';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import './index.css';

const store = createStore(allReducers);

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <StayProductive></StayProductive>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
