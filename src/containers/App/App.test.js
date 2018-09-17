import React from 'react'
import { App } from './'
import { shallow } from 'enzyme'

describe('App', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<App
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});