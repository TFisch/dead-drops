import { locationReducer } from '../locationReducer';
import { mockLocation, mockLocationReducer } from '../../utilities/mockData';
import * as actions from '../../actions/';


describe('locationReducer', () => {
  const { getLocation } = actions;

  it('should return the initial State', () => {
    const expected = {};

    const result = locationReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should retieve the token', () => {

    expect(locationReducer(undefined, getLocation(mockLocation))).toEqual(mockLocationReducer);
  });

});