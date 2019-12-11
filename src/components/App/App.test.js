import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  describe('App Snapshots', () => {
    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  // describe('State changes in App', () => {
  

  //   // I tried to mock out fetch so that I could show the second change in state, but I wasn't able to in the time constraints.  Perhaps next time I change state before I make the POST request?Not sure on the best practice there.


  //   it('Should change state when addNewReservation is fired', () => {

  //     const initialState = {
  //       ogReservations: [
  //         {
  //           name: '',
  //           date: '',
  //           time: '',
  //           number: 0
  //         }
  //       ]
  //     }

  //     const expected = {
  //       ogReservations: [
  //         {
  //           name: 'John Adams',
  //           date: '',
  //           time: '',
  //           number: 0
  //         }
  //       ]
  //     }

  //     window.fetch = jest.fn().mockImplementation(() => {
  //       return Promise.resolve({
  //         ok: true,
  //         json: () => {
  //           return Promise.resolve()
  //         }
  //       })
  //     })

  //     wrapper.setState(initialState);
  //     wrapper.instance().addNewReservation("John Adams", '', '', 0);
  //     expect(wrapper.state()).toEqual(expected);
  //   })

  // })

})