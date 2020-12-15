import React, { useState } from 'react';

import '../Dashboard.css';


const Dashboard = () => {
  const [verificationKey, setVerificationKey] = useState('');
  const [verifying, setVerifying] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [requestTitle, setRequestTitle] = useState('');

  const askForConfirmation = (request) => {
    setRequestTitle(request);
    setConfirmation(true);
  }

  const cancelVerification = () => {
    setVerifying(false);
    setConfirmation(false);
  }

  return (
    <div className='dashboard-container'>
      {verifying ?
        <div>
          <input placeholder='verification key' onChange={(e) => setVerificationKey(e.target.value)}></input>
          <button>Execute</button>
          <button onClick={() => cancelVerification()}>Cancel Verification</button>
        </div>
        :

        <div>
          {confirmation ?
            <div>
              <h2 className='dashboard-text'>{`Are you sure you want to ?`}</h2>
              <button onClick={() => setVerifying(true)}>YES</button>
              <button onClick={() => setConfirmation(false)}>NO</button>
            </div>
            :
            <div>
              <button onClick={() => askForConfirmation('Initiate Market Failure')}>Initiate Market Failure</button>
              <button onClick={() => askForConfirmation('Shutdown Dark Website and erase all evidence?')}>Delete Website (erasing all evidence)</button>
            </div>
          }

        </div>
      }

    </div>
  )
};



export default Dashboard;