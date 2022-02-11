import React from 'react';
import ReactDOM from 'react-dom';
import styles from "./index.module.css";

function Sidebar () {

    return (
        <nav className={styles['navbar']}>
            <ul className={styles['nav-menu']}>
                <li className={styles['nav-item']}>HI</li>
                <li className={styles['nav-item']}>HI</li>
                <li className={styles['nav-item']}>HI</li>
                <li className={styles['nav-item']}>HI</li>
                <li className={styles['nav-item']}>HI</li>
            </ul>
        </nav>
    )
}

export default Sidebar;