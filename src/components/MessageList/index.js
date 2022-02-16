import styles from './index.module.css';

function BodyContent (props) {

    const current = props.current;

    return (
        <div className={styles['body-content']}>
            <div className={styles['content-header']}>
                <div className={styles['content-header-txt']}># {current}</div>
            </div>
            <div className={styles['content-main']}>
                bbb
            </div>
            <div className={styles['content-footer']}>
                <div className={styles['content-footer-txt']}>
                    <input placeholder='Type a Message..' className={styles['footer-input']}></input>
                </div>
                <div className={styles['content-footer-btn']}>ddd</div>
            </div>
        </div>
    )

}

export default BodyContent;