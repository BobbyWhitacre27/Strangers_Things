import React, { useState } from 'react';

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(username)
    console.log(password)
    setUsername('')
    setPassword('')
  }

  const handleChange = (event) => {
    setUsername(event.target.value)
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
  }

  return (
    <div id='container'>
      <form onSubmit={handleSubmit}>
        <h1 id='welcomeSignUp'>Welcome to Stranger's Things!</h1>
        <p id='signUpInstructions'>Please log-in to your account below.</p>
        <div>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={username} onChange={handleChange} />
          <label htmlFor='password'>Password:</label>
          <input type='password' name='password' value={password} onChange={handlePassword} />
          <button type='submit' className='button1'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default LogIn;