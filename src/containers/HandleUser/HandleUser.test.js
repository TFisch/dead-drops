import React from 'react';
import { shallow } from 'enzyme'
import { HandleUser, getAccessToken, mapStateToProps, mapDispatchToProps } from '../HandleUser'
import { getToken, setUser, fetchUserImage } from '../../actions'
import { tokenMock, mockUser, mockPropsMethod } from '../../utilities/mockData'

describe('HandleUser', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HandleUser setUser={mockPropsMethod} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();

  });

  describe('getUserImage', () => {
    it('should ', async () => {
      const spy = spyOn(wrapper.instance(), 'getUserImage');
      wrapper.instance().forceUpdate();

      await wrapper.instance().getUserImage();

      expect(spy).toHaveBeenCalled();

    });
  });

  describe('MapStateToProps', () => {
    it('should return a user object', () => {
      const mockedState = { user: { username: 'Al Borlin', image: 'google.com' } }

      const mappedProps = mapStateToProps(mockedState);

      expect(mappedProps).toEqual(mockedState);
    });

    it('should return a token object', () => {
      const mockState = { token: tokenMock, user: "Bob" };
      const expected = { token: tokenMock, user: "Bob" };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    });
  });

  describe('MapDispatchToProps', () => {

    it('calls dispatch with a getToken action when getToken is called', () => {

      const mockDispatch = jest.fn()
      const actionToDispatch = getToken(tokenMock)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.getToken(tokenMock)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });

    it('calls dispatch with a setUser action when setUser is called', () => {

      const mockDispatch = jest.fn()
      const actionToDispatch = setUser(mockUser)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setUser(mockUser)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  });

});


