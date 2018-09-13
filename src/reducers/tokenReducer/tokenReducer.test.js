import React from 'react';
import { tokenReducer } from '../tokenReducer'
import { tokenMock } from '../../utilities/mockData'
import * as actions from '../../actions/';


describe('tokenReducer', () => {
  const { getToken } = actions;

  it('should return the initial State', () => {
    const expected = {};

    const result = tokenReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should retieve the token', () => {

    expect(tokenReducer(undefined, getToken(tokenMock))).toEqual(tokenMock)
  });

});