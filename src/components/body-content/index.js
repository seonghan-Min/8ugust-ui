import styles from './index.module.css';

function BodyContent () {

    return (
        <div className={styles['body-content']}>
            <div className={styles['content-header']}>
                aaa
            </div>
            <div className={styles['content-main']}>
                bbb
            </div>
            <div className={styles['content-footer']}>
                ccc
            </div>
        </div>
    )

}

export default BodyContent;