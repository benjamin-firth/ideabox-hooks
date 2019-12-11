import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number, deleteReservation}) => {

  return(
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button type="button" id={id} onClick={() => deleteReservation(id)}>Cancel</button>
    </div>
  )
}

export default Card;