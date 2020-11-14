import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/main.scss';
import App from "./router/app";
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,document.getElementById('root')
);
