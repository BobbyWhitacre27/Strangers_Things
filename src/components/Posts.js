import React, { useState, useEffect } from 'react';


fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts')
    .then(response => response.json())
    .then(result => {
        console.log(result);
    })
    .catch(console.error);



const Posts = () => {
    const [posts, setPosts] = useState({})

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts');
            const posts = await response.json();
            setPosts(posts);
        } catch (err) {
            console.log('err')
        }
    }

    // useEffect(() => {
    //     fetchPosts();
    // }, []);
    // console.log('hello')
    // console.log(posts.map((post) => <span key={post.id}>{posts[0].description}</span>))

    return (
        <div id="posts">
            <h1>
                Posts
            </h1>
            <div>
                {console.log('hello')}
            </div>
        </div>
    );
};



export default Posts;