import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles/sass/style.scss";
import 'material-icons/iconfont/material-icons.css';
import { BrowserRouter } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App />  
  </BrowserRouter>
);

