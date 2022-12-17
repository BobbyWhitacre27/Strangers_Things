import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import { Home, Posts, Profile, SignUp, LogIn, token, logOut } from './components/index';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <nav id="navbar">
                    <div id='title'>
                        <h1>Stranger's Things</h1>
                    </div>
                    <div id='navlinks'>
                        <Link to={'/Home'} className='navLink'>Home</Link>
                        <Link to={'/Posts'} className='navLink'>Posts</Link>
                        <Link to={'/Profile'} className='navLink'>Profile</Link>
                    </div>
                    <div id='signInOutButtons'>
                        {!window.localStorage.getItem('token') ? <button className='buttons'><Link to={'/Login'} className='navLink'>Log-In</Link></button> : ''}
                        {window.localStorage.getItem('token') ? <div><button className='buttons'>Logged in as...</button><button className='buttons' onSubmit={console.log('test1')}>Log-Out</button></div> : ''}
                    </div>
                </nav>
                <div id='main-section'>
                    <Switch>
                        <Route path="/Home">
                            <Home />
                        </Route>
                        <Route path="/Posts">
                            <Posts />
                        </Route>
                        <Route path="/Profile">
                            <Profile />
                        </Route>
                        <Route path="/Login">
                            <LogIn />
                        </Route>
                        <Route exact path="/SignUp">
                            <SignUp />
                        </Route>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);