import React, { useRef, useState } from 'react';
import styles from './index.module.css';
import MessageItem from '../MessageItem/index';
import user_1 from '../../img/user_1.jpg';
import user_2 from '../../img/user_2.jpg';
import user_3 from '../../img/user_3.jpg';

function BodyContent (props) {
    
    const current = props.current;
    const [idx, setIdx] = useState(1);
    const [who, setWho] = useState([]);

    const rdmMessge = [
        "I want to go to the hospital right now.",
        "My neck hurts so much.",
        "I want to eat chicken, but I have no money.",
        "When do you finish studying Linux?",
        "Do you think this is really cool?",
        "Im having a hard time right now. hard to die",
        "What if I am corona positive?",
        "Hello, this is 8ugust.",
        "this isnt very fun How long do you make it?",
        "When will my throat get better?",
        "As I write this, it feels like a poem.",
        "I'm very disappointed with you.",
        "Please enjoy the meat."
    ];

    const msgArr = [
        {
            id: idx,
            user_img: user_1,
            user_nm: 'user_1',
            user_msg: rdmMessge[Math.floor(Math.random() * rdmMessge.length)]
        },
        {
            id: idx,
            user_img: user_2,
            user_nm: 'user_2',
            user_msg: rdmMessge[Math.floor(Math.random() * rdmMessge.length)]
        },
        {
            id: idx,
            user_img: user_3,
            user_nm: 'user_3',
            user_msg: rdmMessge[Math.floor(Math.random() * rdmMessge.length)]
        }
    ];

    function onClickHeaderBtn() {
        const random = Math.floor(Math.random() * msgArr.length)
        setWho([
            ...who,
            msgArr[random]
        ])
        setIdx(idx => idx + 1);
    }

    return (
        <div className={styles['body-content']}>
            <div className={styles['content-header']}>
                <div className={styles['content-header-txt']}># {current}</div>
                <div className={styles['content-header-btn']}>
                    <button onClick={onClickHeaderBtn}>HI</button>
                </div>
            </div>
            <div className={styles['content-main']}>
                {who.map((item) => <MessageItem key={item.id} nm={item.user_nm} img={item.user_img} msg={item.user_msg} />)}
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