import styles from './index.module.css';

function NavItem (props) {

    return (
        <div key={props.id} className={styles['nav-item-inner']}># {props.name}</div>
    );
}

export default NavItem;