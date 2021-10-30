import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


const store = createStore(rootReducer)

const render = () => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


render()
store.subscribe(render)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
