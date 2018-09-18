import React from 'react'
import { DropSubmitForm } from './'
import { shallow } from 'enzyme'
import { mockPropsMethod } from '../../utilities/mockData'

describe('DropSubmitForm', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<DropSubmitForm handleChange={mockPropsMethod}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('handleChange', () => {
    it('should be called when an on change occurs', () => {

      const event = { target: { value: '213' } };

      const spy = jest.spyOn(wrapper.instance(), 'handleChange');
      wrapper.instance().forceUpdate();

      wrapper.find('[name="longitude"]').simulate('change', event);


      expect(spy).toHaveBeenCalled();
    });

  })


  describe('handleChange', () => {
    it('should be called when an on change occurs', () => {

      const event = { target: [0] };

      const spy = jest.spyOn(wrapper.instance(), 'handleCode');
      wrapper.instance().forceUpdate();

      wrapper.find('[name="uniqueOne"]').simulate('change', event);


      expect(spy).toHaveBeenCalled();
    });
  })

})



