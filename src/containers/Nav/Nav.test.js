import React from 'react';
import { shallow } from 'enzyme'
import { Nav } from './'
import { mockUser } from '../../utilities/mockData'

describe('Nav', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Nav user={mockUser} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});