import React, { useEffect, useState } from 'react';
import cookies from 'react-cookies'
import axios from 'axios';

function PostList () {

    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    useEffect(() => {

        cookies.save(
            process.env.REACT_APP_TISTORY_COOKIE_NAME,
            process.env.REACT_APP_TISTORY_COOKIE_VALUE,
            {
                path : '/',
                expires: new Date(process.env.REACT_APP_TISTORY_COOKIE_EXPIRE)
            }
        );

        const callAxios = async () => {
            try {
                const response = await axios.get('tistory/manage/posts.json', null, { withCredential : true });
                response.data.items.map(item => {
                    item.title = item.title.substr(0, 30) + ' ...';
                })
                setPost(response.data.items);

            } catch (err) {
                alert('Tistory API ERROR');
                console.error(err);
                return;

            }

            setLoading(false);
        }
        
        callAxios();
    }, [])


    return (
        <>
            {loading && <></>}
            {!loading && (
                <>
                    <div onClick={() => window.location.href = post[0].permalink}>{post[0].title}</div>
                    <div onClick={() => window.location.href = post[1].permalink}>{post[1].title}</div>
                    <div onClick={() => window.location.href = post[2].permalink}>{post[2].title}</div>
                    <div onClick={() => window.location.href = post[3].permalink}>{post[3].title}</div>
                    <div onClick={() => window.location.href = post[4].permalink}>{post[4].title}</div>
                    <div onClick={() => window.location.href = post[5].permalink}>{post[5].title}</div>
                </>
            )}
        </>
    )
}

export default PostList;