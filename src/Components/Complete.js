import React, { useState } from 'react';
import '../Dashboard.css';


const Complete = (props) => {
  return (
    <div className='dashboard-container'>
      <h1 className='dashboard-text'>Thanks for playing! </h1>
      <h3 className='dashboard-text'>You have won</h3>
      <h5 className='dashboard-text'>Now get out of here before Mr. Crit finds you!!!</h5>
    </div>

  )
}

export default Complete;