import React from 'react';
import './Card.css';

const Card = ({ id, name, date, time, number}) => {

  return(
    <div className="card">
      <h3>{name}</h3>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button typer="button" id={id} >Cancel</button>
    </div>
  )
}

export default Card;