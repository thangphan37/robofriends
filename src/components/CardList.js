import React from 'react';
import Card from './Card';

function CardList({robots}) {
  return(
    <div className="tc">
      {robots.map((robot, index) => <Card key={index} robot={robot}/>)}
    </div>
  )
}

export default CardList;