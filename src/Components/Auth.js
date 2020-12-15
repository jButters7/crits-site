import React, { useState } from 'react';
import '../Auth.css'
import loadingGif from '../loading.gif';
import loading2Gif from '../loading2.gif';
const Auth = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rightPassword, setRightPassword] = useState(false);
  const [correctUsername, setCorrectUsername] = useState(true)
  const [correctPassword, setCorrectPassword] = useState(true)

  const loginUser = () => {
    if (username === 'Crit' && password === 'Crit') {
      setTimeout(() => { props.history.push('/dashboard');)
    }, 2000)
    props.history.push('/dashboard')
  } else if (username === 'Crit' && password !== 'Crit') {
    setCorrectUsername(true);
    setCorrectPassword(false);
  } else if (username !== 'Crit' && password === 'Crit') {
    setCorrectUsername(false);
    setCorrectPassword(true);
  } else {
    setCorrectUsername(false);
    setCorrectPassword(false);
  }
}

return (
  <div className='login-container'>
    {/* <img src={rightPassword ? loadingGif : loading2Gif} /> */}
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
)
};

export default Auth;