import React from 'react';
import ReactDOM from 'react-dom';
// (1) Import scss file to be source of styling
import './styles.scss'
// (1) Import Router
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
