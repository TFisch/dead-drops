import React from 'react';
import { shallow, mount } from 'enzyme';
import { Nav } from './';
import { mockUser, mockPropsMethod } from '../../utilities/mockData';
import { setFormActive, resetConfirm, resetFormActive } from '../../actions';
import { mapStateToProps, mapDispatchToProps } from './';

describe('Nav', () => {
  let wrapper;
  const mockPropsMethodTwo = mockPropsMethod;
  const mockPropsMethodThree = mockPropsMethod;

  beforeEach(() => {
    wrapper = shallow(
      <Nav
        user={mockUser}
        setFormActive={mockPropsMethod}
        resetConfirm={mockPropsMethodTwo}
        resetFormActive={mockPropsMethodThree}
      />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleSubmit', () => {

    it('should call setFormActive when called', () => {
      wrapper.instance().handleSubmitButton();

      expect(mockPropsMethod).toHaveBeenCalled();
    });

  });

  describe('handleProfileButton', () => {
    it('should call resetConfirm when called', () => {

      wrapper.instance().handleProfileButton();

      expect(mockPropsMethodTwo).toHaveBeenCalled();

    });

    it('should call resetFormActive when called', () => {

      wrapper.instance().handleProfileButton();

      expect(mockPropsMethodThree).toHaveBeenCalled();

    });
  });

  describe('MapStateToProps', () => {
    it('should return a user object', () => {
      const mockedState = { user: { username: 'Al Borlin', image: 'google.com' } };

      const mappedProps = mapStateToProps(mockedState);

      expect(mappedProps).toEqual(mockedState);
    });

  });

  describe('MapDispatchToProps', () => {

    it('should call dispatch with a status value when setFormActive is called', () => {
      const mockDispatch = jest.fn();
      const mockStatus = true;
      const actionToDispatch = setFormActive(mockStatus);

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.setFormActive(mockStatus);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch when resetConfirm is called', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = resetConfirm();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.resetConfirm();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });


    it('should call dispatch when resetFormActive is called', () => {
      const mockDispatch = jest.fn();

      const actionToDispatch = resetFormActive();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.resetFormActive();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });



  });

});