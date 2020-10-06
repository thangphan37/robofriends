import React from 'react';

type Props = {
    children: JSX.Element
};

const ScrollRobot: React.FC<Props> = ({children}) => {
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