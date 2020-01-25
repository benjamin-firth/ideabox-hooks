import React, { useState } from 'react';
import './Form.css';

const Form = ({ addNewReservation }) => {

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [number, setNumber] = useState(0);

  return(
    <section className="enter-form">
      <input 
        name="name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <input 
        name="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} placeholder="Date" />
      <input 
        name="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} placeholder="Time" />
      <input 
        name="number" 
        value={number} 
        onChange={(e) => setNumber(e.target.value)} placeholder="Number of Guests" />
      <button 
        type="button" 
        onClick={() => addNewReservation(name, date, time, number)}>Make Reservation</button>
    </section>
  )
}

export default Form;