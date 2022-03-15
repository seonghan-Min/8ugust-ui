import React, { useEffect, useState } from 'react';
import Navbar from './Navbar/index';
import BodyContent from './MessageList/index';
import AddRoomModal from './AddRoomModal/index';
import styles from './main.module.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function Main () {

    const [isModal, setIsModal] = useState(false);
    const [roomList, setRoomList] = useState([]);
    const [roomId, setRoomId] = useState(1);
    const [roomNm, setRoomNm] = useState('');
    const [current, setCurrent] = useState('Hello');


    return (
        <div className={styles['content']}>
            <Navbar setIsModal={setIsModal} roomList={roomList} setCurrent={setCurrent}/>
            <BodyContent current={current}/>
            <AddRoomModal isModal={isModal} setIsModal={setIsModal} roomId={roomId} setRoomId={setRoomId} roomNm={roomNm} setRoomNm={setRoomNm} roomList={roomList} setRoomList={setRoomList}/>
        </div>
    );
}

export default Main;