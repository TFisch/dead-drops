import React from 'react'
import { ConfirmDrop } from '../ConfirmDrop'
import { shallow } from 'enzyme'
import { mockLocation, mockPropsMethod, tokenMock } from '../../utilities/mockData'
import { mapStateToProps } from './';

describe('ConfirmDrop', () => {
  let wrapper;
  const mockPropsMethodTwo = mockPropsMethod;
  const mockPropsMethodThree = mockPropsMethod;
  const mockPropsMethodFour = mockPropsMethod;

  beforeEach(() => {
    wrapper = shallow(<ConfirmDrop
      location={mockLocation}
      toggleSubmit={mockPropsMethod}
      postPin={mockPropsMethodTwo}
      handleEdit={mockPropsMethodFour}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleConfirm', () => {

    it('should call handleConfirm on click', () => {
      wrapper.find('[name="confirm"]').simulate('click');

      expect(mockPropsMethodThree).toHaveBeenCalled();
    });

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

    it('should call handleEdit on click', () => {
      wrapper.find('[name="edit"]').simulate('click');

      expect(mockPropsMethodFour).toHaveBeenCalled();
    });

    it('should call toggleSubmit', () => {

      wrapper.instance().handleEdit();

      expect(mockPropsMethod).toHaveBeenCalled();

    });
  });

  describe('mapStatetoProps', () => {

    it('should return a token object', () => {
      const mockState = { token: tokenMock, locationData: {} };
      const expected = { token: tokenMock, location: {} };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected)
    });
  });

});