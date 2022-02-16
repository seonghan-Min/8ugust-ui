import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/index';
import BodyContent from './MessageList/index';
import AddRoomModal from './AddRoomModal/index';
import styles from './main.module.css';

function Main () {

    const [isModal, setIsModal] = useState(false);
    const [roomList, setRoomList] = useState([]);
    const [roomId, setRoomId] = useState(1);
    const [roomNm, setRoomNm] = useState('');


    return (
        <div className={styles['content']}>
            <Navbar setIsModal={setIsModal} roomList={roomList}/>
            <BodyContent/>
            <AddRoomModal isModal={isModal} setIsModal={setIsModal} roomId={roomId} setRoomId={setRoomId} roomNm={roomNm} setRoomNm={setRoomNm} roomList={roomList} setRoomList={setRoomList}/>
        </div>
    );
}

export default Main;