import React, { useState, useEffect } from 'react';

const Posts = ({ user }) => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts',
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }
                })
                ;
            const apiPosts = await response.json();
            console.log(apiPosts)
            setPosts(apiPosts.data.posts);
        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div id="posts">
            <h1>
                Posts
            </h1>
            <div id='postsDiv'>
                {posts.map((e, i) => {
                    return (<div id='postDiv' key={i}>
                        <div id='posttop'>
                            <h2 id='posttitle'>{e.title}</h2>
                            <h3 id='postprice'>{e.price}</h3>
                        </div>
                        <ul id='postdescription'>{e.description}</ul>
                        <div id='postbottom'>
                            <ul id='postedby'>Posted by: {e.author.username} {e.createdAt}</ul>
                            <ul id='postdelivery'>{e.willDeliver === true ? 'Will Deliver' : "Will Not Deliver"}</ul>
                        </div>
                        {JSON.stringify(e.isAuthor) === 'true' ? <div id='yourPost'>Posted by you: <span id='usernameSpan'>{user.username}</span>.</div> : ''}
                    </div>)
                })}
            </div>
        </div>
    );
};



export default Posts;