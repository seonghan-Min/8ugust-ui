import styles from './index.module.css';

function MessageItem (props) {

    const date = new Date();
    const hour = date.getHours().length == 1 ? '0'+date.getHours() : date.getHours();
    const min  = date.getMinutes().length == 1 ? '0'+date.getMinutes() : date.getMinutes();
    const now  = hour + ':' + min; 


    return (
        <div className={styles['item-top']}>
            <img src={props.img} alt={props.nm}></img>
            <div>
                <div className={styles['user-name']}>{props.nm} | {now}</div>
                <div className={styles['user-text']}>{props.msg}</div>
            </div>
        </div>
    );
}

export default MessageItem;