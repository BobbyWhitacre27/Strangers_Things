import React from 'react';

const Home = () => {
    return (
        <div id="home">
            <h1>
                Home Page
            </h1>

            <br></br>
            <h2>Create a Post:</h2>
            <br></br>
            <form id='postingDiv'>
                <ul id='postingTitle' className='postingFormEntry'><h3>Title: </h3><input id='titleInput' type='text'></input></ul>
                <ul id='postingPrice' className='postingFormEntry'><h3>Price: </h3><input id='priceInput' type='text'></input></ul>
                <ul id='postingDescription' className='postingFormEntry'><h3>Description: </h3><input id='descriptionInput' type='text'></input></ul>
                <ul id='postingWillDeliver' className='postingFormEntry'><h3>Will deliver?</h3><input type="checkbox"></input></ul>
                <button className='buttons'>Submit</button>
                {/* title
            price
            description
            author
            willDeliver */}

            </form>
        </div>
    );
};


export default Home;