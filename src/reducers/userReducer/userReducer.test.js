import React from 'react';
import { userReducer } from '../userReducer'

describe('userReducer', () => {

  it('should return the initial State', () => {
    const expected = {};

    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should retieve the profile image', () => {

  });

});