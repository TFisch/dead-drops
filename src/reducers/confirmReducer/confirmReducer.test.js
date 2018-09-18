import React from 'react';
import { confirmReducer } from './';
import * as actions from '../../actions/';


describe('confirmReducer', () => {
  const { setConfirm, resetConfirm } = actions;
  const mockStatus = true;

  it('should return the initial State', () => {
    const expected = {};

    const result = confirmReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set the confirm state to true', () => {
    const mockConfirmReducer = true;

    expect(confirmReducer(undefined, setConfirm(mockStatus))).toEqual(mockConfirmReducer);
  });

  it('should clear the confirm state to an empty object', () => {
    const mockConfirmReducer = {};

    expect(confirmReducer(undefined, resetConfirm())).toEqual(mockConfirmReducer);
  });

});