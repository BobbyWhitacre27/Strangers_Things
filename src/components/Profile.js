import React, { useState, useEffect } from 'react';

const Profile = ({ user }) => {
    const [posts, setPosts] = useState([])
    const [messages, setMessages] = useState('')

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts',
                { 
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    }
                });
            const apiPosts = await response.json();
            console.log(apiPosts)
            setPosts(apiPosts.data.posts);
        } catch (err) {
            console.log('err', err)
        }
    }

    const handleMessages = (event) => {
        setMessages(event.target.value)
    }

    const handleAddMessages = (id) => {
        addMessages(id)
        setMessages('')
        fetchPosts(id)
    }

    const addMessages = async (id) => {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts/${id}/messages`,
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                    body: JSON.stringify({
                        message: {
                            content: messages
                        }
                    })
                })
            const addNewMessage = await response.json();
            console.log(addNewMessage)
            setMessages('')
            fetchPosts(id);
        } catch (err) {
            console.log('err', err)
        }
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    return (
        <div id="profile">
            <h1>
                Profile
            </h1>
            <br></br>
            <h3>{user?.username ? `User: ${user?.username}` : 'You are currently not logged in'}</h3>
            {posts.map((e, i) => {
                    return (e.isAuthor ? <div id='postDiv' key={i}>
                        <div id='posttop'>
                            <h2 id='posttitle'>{e.title}</h2>
                            <h3 id='postprice'>{e.price}</h3>
                        </div>
                        <ul id='postdescription'>{e.description}</ul>
                        <div id='postbottom'>
                            <ul id='postedby'>Posted by: {e.author.username} {e.createdAt}</ul>
                            <ul id='postdelivery'>{e.willDeliver === true ? 'Will Deliver' : "Will Not Deliver"}</ul>
                        </div>
                               
                            <div id='messages'>
                                <div id='showMessages'>{e.messages.map((a, i) => {
                                    return (<div key={i}>
                                        <div id='messageAuthor'>{a.fromUser.username}</div>
                                        <div id='messageDisplay'>{a.content}</div> 
                                        
                                        </div>)
                                })}</div>
                                <div id='messageInput'>
                                    Message :<input onChange={handleMessages} type='text'></input>
                                    <button onClick={() => handleAddMessages(e._id)} className='buttons' >Submit</button>
                                </div>
                            </div>

                            {/* <div id='yourPostDiv'>
                                <div id='yourPostInfo'>
                                    Posted by you: <span id='usernameSpan'>{user.username}</span>
                                </div>
                                <button onClick={() => handleDelete(e._id)} id='deleteButton'>Delete</button>
                            </div>  */}
        
                        </div>: ''

                 )
                })}
        </div>
    );
};




export default Profile;