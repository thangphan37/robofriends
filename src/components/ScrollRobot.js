import React from 'react';

function ScrollRobot({children}) {
  return (
    <div style={
      {
        height: '500px',
        overflowY: 'auto',
        border: 'solid 5px #000000'
      }
    }>
      {children}
    </div>
  )
}

export default ScrollRobot;