import React, { useState } from 'react';
import axios from 'axios';

function PostList () {

    const [post, setPost] = useState([]);

    axios.get('tistory/manage/posts.json', null, { withCredential : true })
        .then(res => {
            const response = res.data.items;
            // setPost(response);
        })

    console.log(post);
    return (
        <>
            <div>HI</div>
        </>
    )
}

export default PostList;