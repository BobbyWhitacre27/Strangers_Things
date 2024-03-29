import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    postNewUser()
    // console.log(username)
    // console.log(password)
    setUsername('')
    setPassword('')
  }

  const handleUsername = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  const postNewUser = async () => {
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2209-ftb-ct-web-pt/users/register',
        {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            user: {
              username: username,
              password: password
            }
          })
        })
      const newUser = await response.json();
      console.log(newUser)
      newUser.success === true ? document.getElementById('welcomePopUp').innerHTML = `${newUser.data.message}` : document.getElementById('welcomePopUp').innerHTML = newUser.error.message;
      handleUsername(newUser.user.username);
      handlePassword(newUser.user.password)
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <div id='container'>
      <form onSubmit={handleSubmit}>
        <h1 id='welcomeSignUp'>Sign-Up</h1>
        <p id='signUpInstructions'>To create an account please set up a username and password below.</p>
        <div>
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
        <div id='welcomePopUp'></div>
        <div>Please <Link to='Login'>click here</Link> to login</div>
      </form>
    </div>
  )
}

export default SignUp;