import React from 'react'
import { DropCard } from './'
import { shallow } from 'enzyme'
import { mockImage, mockCardData, mockUserResponse } from '../../utilities/mockData'

describe('DropCard', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<DropCard props={mockCardData}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});