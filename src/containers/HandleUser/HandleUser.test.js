import React from 'react';
import { shallow } from 'enzyme'
import { HandleUser } from '../HandleUser'
import { mockUser, mockAuth } from '../../utilities/mockData'

describe('HandleUser', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HandleUser />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();

  });


});


