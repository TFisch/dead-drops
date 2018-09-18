import { formActiveReducer } from './';
import * as actions from '../../actions/';


describe('formActiveReducer', () => {
  const { setFormActive, resetFormActive } = actions;
  const mockStatus = true;

  it('should return the initial State', () => {
    const expected = {};

    const result = formActiveReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should set the formActive state to true', () => {
    const mockFormActiveReducer = true;

    expect(formActiveReducer(undefined, setFormActive(mockStatus))).toEqual(mockFormActiveReducer);
  });

  it('should clear the confirm state to an empty object', () => {
    const mockFormActiveReducer = {};

    expect(formActiveReducer(undefined, resetFormActive())).toEqual(mockFormActiveReducer);
  });

});