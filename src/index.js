import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/index';
import BodyContent from './components/MessageList/index';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <div className='content'>
      <Navbar />
      <BodyContent />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
