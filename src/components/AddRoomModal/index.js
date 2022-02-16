import React from 'react';
import styles from './index.module.css';

function AddRoomModal (props) {
    const isModal = props.isModal;
    
    return (
        <div className={(isModal) ? styles['modal'] : styles['close']}>
            <section>
                <header>
                    <div>Create a Room</div>
                    <button>X</button>
                </header>
                <main>
                    <div>
                        <div>Room Name</div>
                        <input placeholder='Type a Room Name'></input>
                    </div>
                    <div>
                        <div>Member</div>
                        <select disabled></select>
                    </div>
                </main>
                <footer>
                    <button className={styles['btn-left']}>Create</button>
                    <button className={styles['btn-right']}>Close</button>
                </footer>
            </section>
        </div>
    );
}

export default AddRoomModal;