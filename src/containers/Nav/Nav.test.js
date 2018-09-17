import React from 'react';
import { shallow, mount } from 'enzyme'
import { Nav } from './'
import { mockUser, mockPropsMethod } from '../../utilities/mockData'
import { setFormActive, resetConfirm, resetFormActive } from '../../actions'
import { handleSubmitButton } from './';

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
    )
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

    })

    it('should call resetFormActive when called', () => {

      wrapper.instance().handleProfileButton();

      expect(mockPropsMethodThree).toHaveBeenCalled();

    })
  });

});