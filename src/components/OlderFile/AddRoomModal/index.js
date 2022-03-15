import React from 'react';
import styles from './index.module.css';

function AddRoomModal (props) {

    const [isModal, setIsModal] = [props.isModal, props.setIsModal];
    const [roomId, setRoomId] = [props.roomId, props.setRoomId];
    const [roomNm, setRoomNm] = [props.roomNm, props.setRoomNm];
    const [roomList, setRoomList] = [props.roomList, props.setRoomList];

    function onClickClose () {
        setIsModal(false);
    }

    function onClickCreate () {

        if (roomNm === '') {
            alert('Please enter your Room Name.');
            return false;
        }

        setRoomList([
            ...roomList,
            {
                id: roomId,
                name: roomNm
            }
        ]);
        setRoomId(roomId => roomId + 1);
        setRoomNm('');
        setIsModal(false);
    }

    function onChangeInput (event) {
        setRoomNm(event.target.value);
    }
    
    return (
        <div className={(isModal) ? styles['modal'] : styles['close']}>
            <section>
                <header>
                    <div>Create a Room</div>
                    <button onClick={onClickClose}>X</button>
                </header>
                <main>
                    <div>
                        <div>Room Name</div>
                        <input placeholder='Type a Room Name' value={roomNm} onChange={onChangeInput}></input>
                    </div>
                    <div>
                        <div>Member</div>
                        <select disabled></select>
                    </div>
                </main>
                <footer>
                    <button className={styles['btn-left']} onClick={onClickCreate}>Create</button>
                    <button className={styles['btn-right']} onClick={onClickClose}>Close</button>
                </footer>
            </section>
        </div>
    );
}

export default AddRoomModal;