import React, { useState, Link, BrowserRouter, Switch, Route } from 'react';
import { SignUp } from './index'

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username)
    console.log(password)
    userLogIn()
    setUsername('')
    setPassword('')
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const userLogIn = async () => {
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/users/login',
        {method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: username,
            password: password
          }
      }
      )})
      const newUser = await response.json();
      console.log(newUser)
      newUser.success === true ? document.getElementById('loginPopUp').innerHTML = newUser.data.message : document.getElementById('loginPopUp').innerHTML = newUser.error.message;
      handleUsername(newUser.user.username);
      handlePassword(newUser.user.password);
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <div id='container'>
      <form onSubmit={handleSubmit}>
        <h1 id='welcomeSignUp'>Log-In to Stranger's Things!</h1>
        <p id='signUpInstructions'>Please log-in to your account below.</p>
        <div id='loginDiv'>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={username} onChange={handleUsername} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value={password} onChange={handlePassword} />
          <button type='submit' className='button1'>Submit</button>
        </div>
      </form>
      <br></br>
      <p>Don't have an account? <a href='/Signup'>Sign-Up</a></p>
      <br></br>
      <h3 id='loginPopUp'></h3>
    </div>
  )
}

export default LogIn;