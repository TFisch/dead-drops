import React from 'react';
import { shallow } from 'enzyme';
import { Profile, mapStateToProps, mapDispatchToProps } from '../Profile/'
import { mockUser, mockToken } from '../../utilities/mockData'
import { getToken } from '../../actions'

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

  it('should return an object with username and image', () => {
    const mockedState = { locationData: {}, user: { username: 'Al Borlin', image: 'google.com' }, token: '32904932' }
    const expected = { location: {}, user: { username: 'Al Borlin', image: 'google.com' }, token: '32904932' }
    const mappedProps = mapStateToProps(mockedState);

    expect(mappedProps).toEqual(expected);

  });
});

describe('MapDispatchToProps', () => {

  it('calls dispatch with a getToken action when getToken is called', () => {

    const mockDispatch = jest.fn()
    const actionToDispatch = getToken(mockToken)

    const mappedProps = mapDispatchToProps(mockDispatch)
    mappedProps.getToken(mockToken)

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

  });
});