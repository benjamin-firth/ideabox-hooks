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

})