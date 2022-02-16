import React from 'react';
import Navbar from './Navbar/index';
import BodyContent from './MessageList/index';
import AddRoomModal from './AddRoomModal/index';
import styles from './main.module.css';

function Main () {

    return (
        <div className={styles['content']}>
            <Navbar />
            <BodyContent />
            <AddRoomModal />
        </div>
    );
}

export default Main;