import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';
import { BrowserRouter, Link, Route } from 'react-router-dom'

import { Home } from './components/index';
import { Posts } from './components/index';
import { Profile } from './components/index';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <h1>Stranger's Things</h1>
                <nav id="navbar">
                    <div id='navlinks'>
                        <Link to={'/Home'} className='navLink'>Home</Link>
                        <Link to={'/Posts'} className='navLink'>Posts</Link>
                        <Link to={'/Profile'} className='navLink'>Profile</Link>
                        <button id='logoutButton'>Logout</button>
                    </div>
                </nav>
                <div id='main-section'>
                    <Route path="/Home">
                        <Home />
                    </Route>
                    <Route path="/Posts">
                        <Posts />
                    </Route>
                    <Route exact path="/Profile">
                        <Profile />
                    </Route>
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);