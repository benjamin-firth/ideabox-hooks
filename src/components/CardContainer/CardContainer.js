import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({ ogReservations }) => {
  const cards = ogReservations.map(card => {
    return(
      <Card 
        id={card.id} 
        name={card.name} 
        date={card.date} 
        time={card.time} 
        number={card.number} 
      />
    )
  })

  return(
    <div className="cards-container">
      {cards}
    </div>
  )
}

export default CardContainer;