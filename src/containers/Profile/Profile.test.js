import React from 'react';
import { shallow } from 'enzyme';
import {
  Profile,
  retrieveDropBoard,
  mapStateToProps,
  mapDispatchToProps,
  handlePost
} from '../Profile/'
import { mockUser, mockToken } from '../../utilities/mockData'
import { getToken, setUser } from '../../actions'

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile user={mockUser} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
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


    it('calls dispatch with a setUser action when setUser is called', () => {

      const mockDispatch = jest.fn()
      const actionToDispatch = setUser(mockUser)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.setUser(mockUser)

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  });

  describe('retrieveDropBoard', () => {

    it.skip('set state when retrieveDropBoard is called', async () => {
      const mockfetch = jest.fn()
      const mockState = { mockfetch, dropListRetrieved: true }
      await wrapper.instance().retrieveDropBoard();


    });

  });

  describe('handlePost', () => {

    it('should change the state of dropFormActive when called', () => {
      expect(wrapper.state().dropFormActive).toEqual(false)

      wrapper.instance().handlePost();

      expect(wrapper.state().dropFormActive).toEqual(true)
    });

  });

  describe('toggleSubmit', () => {

    it('should change the state of dropToConfirm when called', () => {
      expect(wrapper.state().dropToConfirm).toEqual(false)

      wrapper.instance().toggleSubmit(true);

      expect(wrapper.state().dropToConfirm).toEqual(true)
    });

  });



});
