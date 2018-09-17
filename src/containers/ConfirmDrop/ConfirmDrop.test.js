import React from 'react'
import { ConfirmDrop } from '../ConfirmDrop'
import { shallow } from 'enzyme'
import { mockLocation, mockPropsMethod } from '../../utilities/mockData'

describe('ConfirmDrop', () => {
  let wrapper;
  const mockPropsMethodTwo = mockPropsMethod;

  beforeEach(() => {
    wrapper = shallow(<ConfirmDrop location={mockLocation} toggleSubmit={mockPropsMethod} postPin={mockPropsMethodTwo} />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleConfirm', () => {

    it('should call toggleSubmit', () => {

      wrapper.instance().handleConfirm();

      expect(mockPropsMethod).toHaveBeenCalled();

    });

    it('should call the PostPins action'), () => {

      wrapper.instance().handleConfirm();

      expect(mockPropsMethodTwo).toHaveBeenCalled();

    }
  });


  describe('handleEdit', () => {


    it('should call toggleSubmit', () => {

      wrapper.instance().handleEdit();

      expect(mockPropsMethod).toHaveBeenCalled();

    });


  });
});