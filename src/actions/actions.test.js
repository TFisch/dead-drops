import * as actions from '../actions';
import * as mockData from '../utilities/mockData';

describe('actions', () => {

  const {
    mockUsername,
    mockImage,
    tokenMock,
    mockLocation
  } = mockData;

  const {
    setUser,
    getToken,
    getLocation
  } = actions;

  it('should return a user object with the type of SET_USER', () => {
    const expected = {
      type: 'SET_USER',
      username: mockUsername,
      image: mockImage
    }

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

  it('should return a location object with the type of GET_LOCATION', () => {
    const longMock = '3214321504';
    const latMock = '2.52343245';
    const mockLocationImage = 'https://via.placeholder.com/350x150'
    const vcMock = [0, 0, 0, 0, 0, 0]

    const expected = {
      type: 'GET_LOCATION',
      long: longMock,
      lat: latMock,
      locationImage: mockLocationImage,
      verificationCode: vcMock
    }

    const result = getLocation(mockLocation)

    expect(expected).toEqual(result);
  });
});
