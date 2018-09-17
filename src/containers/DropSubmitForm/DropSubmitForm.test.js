import React from 'react'
import { DropSubmitForm } from './'
import { shallow } from 'enzyme'

describe('DropSubmitForm', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<DropSubmitForm
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});