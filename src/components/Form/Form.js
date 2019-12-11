import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      number: 0
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
    console.log(this.state);
  }

  render() {
    return(
      <section className="enter-form">
        <input name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} placeHolder="Name" />
        <input name="date" value={this.state.date} onChange={(e) => this.handleChange(e)} placeHolder="Date" />
        <input name="time" value={this.state.time} onChange={(e) => this.handleChange(e)} placeHolder="Time" />
        <input name="number" value={this.state.number} onChange={(e) => this.handleChange(e)} placeHolder="Number of Guests" />
        <button>Make Reservation</button>
      </section>
    )
  }
}

export default Form;