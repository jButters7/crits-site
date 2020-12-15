import React, { useState } from 'react';
import '../Auth.css'
import loadingGif from '../loading.gif';
const Auth = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rightPassword, setRightPassword] = useState(false);
  const [correctUsername, setCorrectUsername] = useState(true)
  const [correctPassword, setCorrectPassword] = useState(true)

  const loginUser = () => {
    if (username === 'p' && password === 'p') {
      setRightPassword(true);
      setTimeout(() => {
        props.history.push('/dashboard');
      }, 8000)
    } else if (username === 'p' && password !== 'p') {
      setTimeout(() => {
        setCorrectUsername(true);
        setCorrectPassword(false);
      }, 2000)
    } else if (username !== 'p' && password === 'p') {
      setCorrectUsername(false);
      setCorrectPassword(true);
    } else {
      setCorrectUsername(false);
      setCorrectPassword(false);
    }
  }

  return (
    <div className='login-container'>
      {rightPassword ?
        <img className='auth-loading-img' src={rightPassword ? loadingGif : null} />
        :
        <div>
          <h1 className="text-logo">Dark WEB</h1>
          <div className='login-inputs'>
            <input placeholder='Username' name='username' onChange={e => setUsername(e.target.value)} />
            {correctUsername ? null : <div className='login-feedback'>Incorrect Username</div>}
          </div>
          <div className='login-inputs'>
            <input placeholder='Password' name='password' onChange={e => setPassword(e.target.value)} />
            {correctPassword ? null : <div className='login-feedback'>Incorrect Password</div>}
          </div>
          <div className='login-buttons-container'>
            <button className='login-button' onClick={() => loginUser()}>Login</button>

          </div>
        </div>
      }

    </div>
  )
};

export default Auth;