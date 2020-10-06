import React from 'react';
import Card from './Card';

export interface Robot {
  id: string;
  username: string;
  email: string
}

const CardList: React.FC<{robots: Robot[]}> = ({robots}) => {
  return(
    <div className="tc">
      {robots.map((robot, index) => <Card key={index} robot={robot}/>)}
    </div>
  )
}

export default CardList;