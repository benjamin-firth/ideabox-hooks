import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper;
  let mockOgReservations;


  beforeEach(() => {
    mockOgReservations = [
      {
        id: 123,
        name: 'test-ben',
        date: '12/12',
        time: '7:00',
        number: 3
      }
    ]
    wrapper = shallow(<CardContainer ogReservations={mockOgReservations} />)
  })

  describe('CardContainer Snapshots', () => {
    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

})