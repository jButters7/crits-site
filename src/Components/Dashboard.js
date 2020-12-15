import React, { useState } from 'react';
import loading2Gif from '../loading2.gif';
import '../Dashboard.css';


const Dashboard = (props) => {
  const [verificationKey, setVerificationKey] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [requestTitle, setRequestTitle] = useState('');
  const [verificationCorrect, setVerificationCorrect] = useState(false);
  const [userFeedback, setUserFeedback] = useState('')
  let [wrongAttempts, setWrongAttempts] = useState(0);

  const askForConfirmation = (request) => {
    setRequestTitle(request);
    setConfirmation(true);
  }

  const cancelVerification = () => {
    setVerifying(false);
    setConfirmation(false);
  }

  const runExecution = () => {
    if (verificationKey === 'Qh7#') {
      setVerificationCorrect(true);
      setTimeout(() => {
        props.history.push('/complete')
      }, 5000)
    } else {
      setUserFeedback('Incorrect verification key')
      setWrongAttempts(wrongAttempts + 1)
    }
  }

  return (
    <div className='dashboard-container'>
      {verificationCorrect ? <img src={loading2Gif} />
        :
        <div>
          {verifying ?
            <div>
              <input placeholder='4 character long verification key' onChange={(e) => setVerificationKey(e.target.value)}></input>
              <div className='user-feedback'>{userFeedback}</div>
              <button onClick={() => runExecution()}>Execute</button>
              <button onClick={() => cancelVerification()}>Cancel Verification</button>
            </div>
            :
            <div>
              {confirmation ?
                <div>
                  <h2 className='dashboard-text confirm-message'>{`Are you sure you want to ${requestTitle}?`}</h2>
                  <button onClick={() => setVerifying(true)}>YES</button>
                  <button onClick={() => setConfirmation(false)}>NO</button>
                </div>
                :
                <div>
                  <h1 className='dashboard-text title'>Hello Mr. Crit</h1>
                  <h2 className='dashboard-text'>What can we do for you today?</h2>
                  <button onClick={() => askForConfirmation('Initiate Market Failure')}>Initiate Market Failure</button>
                  <button onClick={() => askForConfirmation('Exterminate the Dark Web and erase all evidence')}>Exterminate Dark Web</button>
                </div>
              }
            </div>
          }
        </div>
      }
    </div>
  )
};



export default Dashboard;