import React, { useEffect, useRef, useState } from 'react';
import MessageItem from '../MessageItem/index';
import user_1 from '../../img/user_1.jpg';
import user_2 from '../../img/user_2.jpg';
import user_3 from '../../img/user_3.jpg';
import profile from '../../img/profile.png';
import { FaPaperPlane, FaGrinWink } from "react-icons/fa";
import styles from './index.module.css';

function BodyContent (props) {
    
    const scrollRef = useRef();
    const current = props.current;
    const [idx, setIdx] = useState(1);
    const [who, setWho] = useState([]);
    const [me, setMe]   = useState(false);
    const [meMsg, setMeMsg] = useState('');

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
        setMe(false);
        const random = Math.floor(Math.random() * msgArr.length)
        setWho([
            ...who,
            msgArr[random]
        ]);
        setIdx(idx => idx + 1);
        scrollRef.current.scrollIntoView(false);
    }

    function onClickFooterBtn() {

        if (meMsg === '') {
            alert('Please Type a Message.');
            return false;
        }

        setMe(true);
        setWho([
            ...who,
            {
                id: idx,
                user_img: profile,
                user_nm: '8ugust',
                user_msg: meMsg
            }
        ]);
        setMeMsg('');
        setIdx(idx => idx + 1);
    }

    function onChangeInput (event) {
        setMeMsg(event.target.value);
    }

    function enterKey (e) {
        if (e.key == 'Enter') {
            onClickFooterBtn();
        }
    }

    return (
        <div className={styles['body-content']}>
            <div className={styles['content-header']}>
                <div className={styles['content-header-txt']}># {current}</div>
                <div className={styles['content-header-btn']}>
                    <button onClick={onClickHeaderBtn}><FaGrinWink size={25} color="#838282"/></button>
                </div>
            </div>
            <div className={styles['content-main']} ref={el => (scrollRef.current = el)}>
                {who.map((item) => <MessageItem me={me} key={item.id} nm={item.user_nm} img={item.user_img} msg={item.user_msg} />)}
            </div>
            <div className={styles['content-footer']}>
                <div className={styles['content-footer-txt']}>
                    <input placeholder='Type a Message..' value={meMsg} onKeyPress={enterKey} onChange={onChangeInput} className={styles['footer-input']}></input>
                </div>
                <div onClick={onClickFooterBtn} className={styles['content-footer-btn']}><FaPaperPlane size={25} color="#0089fff5"/></div>
            </div>
        </div>
    )

}

export default BodyContent;