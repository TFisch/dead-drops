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

  it('should return an object with username and image', () => {
    const mockedState = { locationData: {}, user: { username: 'Al Borlin', image: 'google.com' }, token: '32904932' }
    const expected = { location: {}, user: { username: 'Al Borlin', image: 'google.com' }, token: '32904932' }
    const mappedProps = mapStateToProps(mockedState);

    expect(mappedProps).toEqual(expected);

  });
});