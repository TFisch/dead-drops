import React from 'react';
import { shallow } from 'enzyme';
import {
  Profile,
  mapStateToProps,
  mapDispatchToProps
} from '../Profile/';
import { mockUser, mockToken, mockPropsMethod } from '../../utilities/mockData';
import { getToken, setUser } from '../../actions';

describe('Profile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Profile user={mockUser} resetConfirm={mockPropsMethod} retrieveDropBoard={mockPropsMethod} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('MapStateToProps', () => {

    it('should return an object with username and image', () => {
      const mockedState = { locationData: {}, formActive: mockPropsMethod, setConfirm: mockPropsMethod, user: { username: 'Al Borlin', image: 'google.com' }, token: '32904932' };
      const expected = { location: {}, formActive: mockPropsMethod, setConfirm: mockPropsMethod, user: { username: 'Al Borlin', image: 'google.com' }, token: '32904932' };

      const mappedProps = mapStateToProps(mockedState);

      expect(mappedProps).toEqual(expected);


    });
  });

  describe('MapDispatchToProps', () => {

    it('calls dispatch with a getToken action when getToken is called', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = getToken(mockToken);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.getToken(mockToken);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });


    it('calls dispatch with a setUser action when setUser is called', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = setUser(mockUser);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setUser(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);

    });
  });

  describe('retrieveDropBoard', () => {

    it.skip('should set state when retrieveDropBoard is called', async () => {
      expect(wrapper.state().dropListRetrieved).toEqual(false);

      wrapper.update();

      expect(mockPropsMethod).toHaveBeenCalled();
    });

  });


  describe('toggleSubmit', () => {

    it('should change the state of dropToConfirm when called', () => {

      expect(wrapper.state().confirmDropActive).toEqual(false);

      wrapper.instance().toggleSubmit();

      expect(wrapper.state().confirmDropActive).toEqual(true);
    });

    it('should change the state of dropToConfirm when called', () => {

      expect(wrapper.state().dropFormActive).toEqual(false);

      wrapper.instance().toggleSubmit();

      expect(wrapper.state().dropFormActive).toEqual(true);
    });
  });



});
