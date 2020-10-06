import React from 'react';
import {Robot} from './CardList';

const Card: React.FC<{robot: Robot}> = ({robot}) => {
  const { id, username, email } = robot;
  return(
    <div className="pa3 grow bg-light-green ma2 tc bw2 br3 shadow-5 dib">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robot"/>
      <h2>{username}</h2>
      <p>{email}</p>
    </div>
  )
}

export default Card;