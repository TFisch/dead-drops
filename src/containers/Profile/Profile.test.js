import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps } from '../Profile/'
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

describe('MapStateToProps', () => {
  const user = mockUser;

  it('should have a user Object in props', () => {
    const expectedProps = mapStateToProps(user);

  });
});