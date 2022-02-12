import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './components/navbar/index';
import page_image from './img/page_image.png';

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <App />
    <img src={page_image} alt='my page'/>
  </React.StrictMode>,
  document.getElementById('root')
);
