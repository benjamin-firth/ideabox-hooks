import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Card />)
  })

  describe('Card Snapshots', () => {
    it('Should match the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    })
  })

})