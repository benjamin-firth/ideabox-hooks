import React from 'react';
import './CardContainer.css';
import Card from '../Card/Card';

const CardContainer = ({ ogReservations, deleteReservation }) => {
  const cards = ogReservations.map(card => {
    return(
      <Card 
        id={card.id} 
        name={card.name} 
        date={card.date} 
        time={card.time} 
        number={card.number} 
        deleteReservation={deleteReservation}
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