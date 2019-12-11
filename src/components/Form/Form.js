import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return(
      <section className="enter-form">
        <input placeHolder="Name" />
        <input placeHolder="Date" />
        <input placeHolder="Time" />
        <input placeHolder="Number of Guests" />
        <button>Make Reservation</button>
      </section>
    )
  }
}

export default Form;