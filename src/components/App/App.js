import React, { Component } from 'react';
import './App.css';
import CardContainer from '../CardContainer/CardContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      ogReservations: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
      .then(res => res.json())
      .then(data => this.setState({ ogReservations: data}));
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          <CardContainer ogReservations={this.state.ogReservations} />
        </div>
      </div>
    )
  }
}

export default App;
