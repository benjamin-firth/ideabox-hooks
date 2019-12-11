import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form />)
  })

  describe('Form Snapshots', () => {
    
    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

  describe('State changes for form', () => {
    it('Should update state when function is fired', () => {
      const mockEvent = {
        target: {
          name: 'name',
          value: 'John Adams'
        }
      }

      const initialState = {
        name: '',
        date: '',
        time: '',
        number: 0
      }

      wrapper.setState(initialState);
      wrapper.instance().handleChange(mockEvent);
      expect(wrapper.state('name')).toEqual('John Adams');
    })
  })

  describe('Events for form', () => {

    it('should fire addNewReservation when clicked', () => {
      const mockAddNewReservation = jest.fn();
      wrapper = shallow(<Form addNewReservation={mockAddNewReservation} />);

      wrapper.find('button').simulate('click');
      expect(mockAddNewReservation).toHaveBeenCalled();
    })

    it('should fire handChange when clicked', () => {
      const mockEvent = {
        target: {
          name: 'name',
          value: 'John Adams'
        }
      }
      wrapper.instance().handleChange = jest.fn();
      wrapper.find('input').at(0).simulate('change', mockEvent)
      expect(wrapper.instance().handleChange).toHaveBeenCalledWith(mockEvent)
    })
  })
})