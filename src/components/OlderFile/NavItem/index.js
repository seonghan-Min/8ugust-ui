import styles from './index.module.css';

function NavItem (props) {

    const setCurrent = props.setCurrent;

    function onClick () {
        setCurrent(props.name)
    }

    return (
        <div key={props.id} className={styles['nav-item-inner']} onClick={onClick}># {props.name}</div>
    );
}

export default NavItem;