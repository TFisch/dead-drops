import React from 'react';
import { Welcome } from './';
import { shallow } from 'enzyme';

describe('Welcome', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<Welcome
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});