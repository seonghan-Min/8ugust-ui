import React from 'react';
import styles from "./index.module.css";

function Navbar () {

    return (
        <div>
            <div>
                <h3>8ugust</h3>
            </div>
            <nav className={styles['navbar']}>
                <ul className={styles['nav-menu']}>
                    <li className={styles['nav-item']}>HI</li>
                    <li className={styles['nav-item']}>HI</li>
                    <li className={styles['nav-item']}>HI</li>
                    <li className={styles['nav-item']}>HI</li>
                    <li className={styles['nav-item']}>HI</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;