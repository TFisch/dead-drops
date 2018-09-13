import * as actions from '../actions';
import * as mockData from '../utilities/mockData';

describe('actions', () => {

  const { mockUsername, mockImage, tokenMock } = mockData;
  const { setUser, getToken } = actions;

  it('should return a user object with the type of SET_USER', () => {
    const expected = { type: 'SET_USER', username: mockUsername, image: mockImage }
    const username = mockUsername;
    const image = mockImage;

    const result = setUser({ username, image })

    expect(result).toEqual(expected);
  });

  it('should return a token object with the type of GET_TOKEN', () => {
    const expected = { type: 'GET_TOKEN', token: tokenMock }
    const result = getToken(tokenMock)

    expect(expected).toEqual(result);
  })
});
