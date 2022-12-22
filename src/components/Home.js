import React, { useState } from 'react';


const Home = ({ user }) => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const handleCreatePost = (event) => {
        event.preventDefault()
        createPost()
        setTitle('')
        setPrice('')
        setDescription('')
    }

    const handleTitle = (event) => {
        setTitle(event.target.value)
    }

    const handlePrice = (event) => {
        setPrice(event.target.value)
    }

    const handleDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleWillDeliver = () => {
        setWillDeliver(!willDeliver)
        console.log(willDeliver)
        //need to get the will deliver boolean working
    }

    const createPost = async () => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/posts',
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${user.token}`
                    },
                    body: JSON.stringify({
                        post: {
                            title: title,
                            description: description,
                            price: price,
                            willDeliver: willDeliver
                        }
                    })
                })
            const addpost = await response.json();
            console.log(addpost)
        } catch (err) {
            console.log('err', err)
        }
    }

    return (user?.username ? (
        <div id="home">
            <h1>
                Home
            </h1>
            <br></br>
            <h2>Create a Post:</h2>
            <br></br>
            <form id='postingDiv' onSubmit={handleCreatePost}>
                <ul id='postingTitle' className='postingFormEntry'><h3>Title: </h3><input id='titleInput' type='text' value={title} onChange={handleTitle}></input></ul>
                <ul id='postingPrice' className='postingFormEntry'><h3>Price: </h3><input id='priceInput' type='text' value={price} onChange={handlePrice}></input></ul>
                <ul id='postingDescription' className='postingFormEntry'><h3>Description: </h3><input id='descriptionInput' type='text' value={description} onChange={handleDescription}></input></ul>
                <ul id='postingWillDeliver' className='postingFormEntry'><h3>Will deliver?</h3><input type="checkbox" value={willDeliver} onChange={handleWillDeliver}></input></ul>
                <button className='buttons'>Submit</button>
            </form>
        </div>
    ) : 'You must log in to create posts.')
};


export default Home;