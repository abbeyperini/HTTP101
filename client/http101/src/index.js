import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import XHR from './Components/XHR';
import Fetch from './Components/Fetch';
import Axios from './Components/Axios';
import Ghibli from './Components/Ghibli';
import Objects from './Components/Objects';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <XHR />
    <Fetch />
    <Axios />
    <Ghibli />
    <Objects />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
