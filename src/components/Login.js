import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'



const LogIn = ({ handleLogIn }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault()
        logIn()
        setUsername('')
        setPassword('')
    }

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

    const logIn = async () => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/users/login',
                {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: {
                            username,
                            password
                        }
                    }
                    )
                })
            const newUser = await response.json();
            // console.log(newUser)
            newUser.success === true ? document.getElementById('loginPopUp').innerHTML = newUser.data.message : document.getElementById('loginPopUp').innerHTML = newUser.error.message;
            handleLogIn({
                username,
                token: newUser.data.token,
            })
        } catch (err) {
            console.log('err', err)
        }
    }

    const logOut = () => {
        setToken('')
        setUsername('')
        console.log('logout')
        return localStorage.clear()
    }


    return (
        <div id='container'>
            <form onSubmit={handleSubmit}>
                <h1 id='welcomeSignUp'>Log-In</h1>
                <p id='signUpInstructions'>Please log-in to your account below.</p>
                <div id='loginDiv'>
                    <div>
                    <label htmlFor='username'>Username:</label>
                    <input type='text' name='username' value={username} onChange={handleUsername} />
                    </div>
                    <div>
                    <label htmlFor='password'>Password:</label>
                    <input type='password' name='password' value={password} onChange={handlePassword} />
                    </div>
                   <button type='submit' className='button1'>Submit</button>
                </div>
            </form>
            <br></br>
            <p>Don't have an account? <Link to="/SignUp"><a href='/SignUp'>Sign-Up</a></Link></p>
            <br></br>

            <h3 id='loginPopUp'></h3>

            {localStorage.getItem('username') ? <submit onClick={logOut} id='logoutButton' className='buttons'>Log-Out</submit> : ''}
        </div>
    )
}

export default LogIn;