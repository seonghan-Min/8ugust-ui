import styles from './index.module.css';
import profile from '../../img/profile.png';

function Navbar () {

    return (
        <div className={styles['navbar']}>
            <div className={styles['nav-header']}>
                <div className={styles['nav-header-img']}>
                    <img src={profile} alt='profile_img'/>
                </div>
                <div className={styles['nav-header-text']}>8ugust</div>
            </div>
            <div className={styles['nav-menu']}>
                <div className={styles['nav-item']}># HI</div>
                <div className={styles['nav-item']}># HI</div>
                <div className={styles['nav-item']}># HI</div>
                <div className={styles['nav-item']}># HI</div>
            </div>
            <div className={styles['nav-footer']}>
                <div className={styles['nav-footer-wrap']}>
                    <div className={styles['nav-footer-txt']}>Create Room</div>
                    <button className={styles['nav-footer-btn']}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;