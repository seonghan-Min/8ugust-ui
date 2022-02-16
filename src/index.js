import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar/index';
import BodyContent from './components/MessageList/index';
import AddRoomModal from './components/AddRoomModal/index';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <div className='content'>
            <Navbar />
            <BodyContent />
            <AddRoomModal />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);