import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/sass/style.scss";
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter } from 'react-router-dom';
import 'swiper/swiper-bundle.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />  
  </BrowserRouter>
);

