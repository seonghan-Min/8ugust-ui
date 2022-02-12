import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/index';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='content'>
      <Navbar />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
