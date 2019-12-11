import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props)
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
        <input 
          name="name" 
          value={this.state.name} 
          onChange={(e) => this.handleChange(e)} placeHolder="Name" />
        <input 
          name="date" 
          value={this.state.date} 
          onChange={(e) => this.handleChange(e)} placeHolder="Date" />
        <input 
          name="time" 
          value={this.state.time} 
          onChange={(e) => this.handleChange(e)} placeHolder="Time" />
        <input 
          name="number" 
          value={this.state.number} 
          onChange={(e) => this.handleChange(e)} placeHolder="Number of Guests" />
        <button 
          type="button" 
          onClick={() => this.props.addNewReservation(this.state.name, this.state.date, this.state.time, this.state.number)}>Make Reservation</button>
      </section>
    )
  }
}

export default Form;