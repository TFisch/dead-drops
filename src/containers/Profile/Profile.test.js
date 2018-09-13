import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../Profile/'
import { mockUser } from '../../utilities/mockData'

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile user={mockUser} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});

