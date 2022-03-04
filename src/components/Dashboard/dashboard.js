import React, { useState } from 'react';
import styles from './dashboard.module.css'

function Dashboard () {

    const [tabActive, setTabActive] = useState(1);


    return (
        <>
            <div className={styles['header-bar']}><span>Money Manager By 8ugust</span></div>
            <div className={styles['content']}>
                <div className={styles['tab']}>
                    <div className={tabActive == 1 ? styles['tab-item-active'] : styles['tab-item']} onClick={()=>setTabActive(1)}>장부</div>
                    <div className={tabActive == 2 ? styles['tab-item-active'] : styles['tab-item']} onClick={()=>setTabActive(2)}>자산</div>
                    <div className={tabActive == 3 ? styles['tab-item-active'] : styles['tab-item']} onClick={()=>setTabActive(3)}>설정</div>
                </div>
                <div className={styles['body']}>
                    
                </div>
            </div>
        </>
    );
}

export default Dashboard;