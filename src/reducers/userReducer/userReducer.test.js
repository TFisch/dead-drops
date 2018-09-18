import { userReducer } from '../../reducers/userReducer';
import { userReducerMock } from '../../utilities/mockData';
import * as actions from '../../actions/';

describe('userReducer', () => {
  const { setUser } = actions;

  it('should return default state', () => {
    const expected = {};

    const result = userReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should combine username and image into reducer object', () => {
    expect(userReducer(undefined, setUser(userReducerMock))).toEqual(userReducerMock);
  });
});