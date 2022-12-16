import React, { useState } from 'react';

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
      handleUsername(newUser.user.username);
      handlePassword(newUser.user.password)
    } catch (err) {
      console.log('err', err)
    }
  }

  return (
    <div id='container'>
      <form onSubmit={handleSubmit}>
        <h1 id='welcomeSignUp'>Welcome to Stranger's Things!</h1>
        <p id='signUpInstructions'>Please log-in to your account below.</p>
        <div>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={username} onChange={handleUsername} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value={password} onChange={handlePassword} />
          <button type='submit' className='button1'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;