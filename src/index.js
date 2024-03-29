import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

import { Home, Posts, Profile, SignUp, LogIn } from './components/index';

const App = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    const [posts, setPosts] = useState([])


    // Store user info in State & Local Storage 
    const handleLogIn = (user) => {
        setUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logOut = () => {
        setUser('')
        localStorage.clear()
    }

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
                        <div id='username'>{user?.username}</div>
                        {!user?.username ? <button className='buttons'><Link to={'/Login'} className='navLink'>Log-In</Link></button> : ''}
                        {user?.username ? <button id='logoutButton' className='buttons' onClick={logOut}>Log-Out</button> : ''}
                    </div>
                </nav>
                <div id='main-section'>
                    <Switch>
                        <Route exact path="/">
                            <Posts user={user}/>
                        </Route>
                        <Route path="/Home">
                            <Home user={user} />
                        </Route>
                        <Route path="/Posts">
                            <Posts user={user} />
                        </Route>
                        <Route path="/Profile">
                            <Profile user={user} posts={posts}/>
                        </Route>
                        <Route path="/Login">
                            <LogIn handleLogIn={handleLogIn} />
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