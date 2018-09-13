import { userReducer } from '../../reducers/userReducer';

describe('userReducer', () => {


  it('should return default state', () => {
    const expected = {}

    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });
});