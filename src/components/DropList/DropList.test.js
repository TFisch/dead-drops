import React from 'react';
import { DropList } from './';
import { shallow } from 'enzyme';
import { mockBoardResponseFull } from '../../utilities/mockData';

describe('DropList', () => {
  let wrapper;

  beforeEach(() => {

    wrapper = shallow(<DropList retrievedBoard={mockBoardResponseFull}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});