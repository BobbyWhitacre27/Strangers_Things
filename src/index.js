import React from 'react';
import ReactDOM from 'react-dom';
import '../src/style.css';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import { Home } from './components/index';
import { Posts } from './components/index';
import { Profile } from './components/index';
import { SignUp } from './components/index';

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
                        <button className='buttons'><Link to={'/SignUp'} className='navLink'>Sign-Up</Link></button>
                        <button className='buttons'>Logout</button>
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