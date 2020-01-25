import React, { useState, useEffect } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer';
import Form from '../Form/Form';

const App = () => {

  const [reservations, setReservations] = useState([]);

  const deleteReservation = (id) => {
    return fetch(`http://localhost:3001/api/v1/reservations/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => setReservations(data))
  }

  const addNewReservation = (name, date, time, number) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        date: date,
        time: time,
        number: number
      })
    })
    .then(response => response.json())
    .then(data => {
      return setReservations([...reservations, data]);
    })
  }

  useEffect(() => {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  return (
    <div className="App">
      <h1 className='app-title'>Turing Cafe Reservations</h1>
      <div className='resy-form'>
      </div>
      <div className='enter-form'>
        <Form addNewReservation={addNewReservation} />
      </div>
      <div className='resy-container'>
        <CardContainer deleteReservation={deleteReservation} ogReservations={reservations} />
      </div>
    </div>
  )
}

export default App;
