import React, { useEffect } from 'react';
import styles from './index.module.css';
import profile from '../../img/profile.png';
import NavItem from '../NavItem/index.js';


function Navbar (props) {
    
    const setCurrent = props.setCurrent;
    const setIsModal = props.setIsModal;
    const roomList = props.roomList;

    function btnClick () {
        setIsModal(true);
    }

    return (
        <div className={styles['navbar']}>
            <div className={styles['nav-header']}>
                <div className={styles['nav-header-img']}>
                    <img src={profile} alt='profile_img'/>
                </div>
                <div className={styles['nav-header-text']}>8ugust</div>
            </div>
            <div className={styles['nav-menu']}>
                <div className={styles['nav-item']}>
                    {roomList.map((item) => <NavItem key={item.id} name={item.name} setCurrent={setCurrent}/>)}
                </div>
            </div>
            <div className={styles['nav-footer']}>
                <div className={styles['nav-footer-wrap']}>
                    <div className={styles['nav-footer-txt-wrap']}>
                        <div className={styles['nav-footer-txt']}>Create a Room</div>
                    </div>
                    <button className={styles['nav-footer-btn']} onClick={btnClick}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;