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
    getLocation,
    setFormActive,
    setConfirm,
    resetConfirm,
    resetFormActive
  } = actions;

  it('should return a user object with the type of SET_USER', () => {
    const expected = {
      type: 'SET_USER',
      username: mockUsername,
      image: mockImage
    };

    const username = mockUsername;
    const image = mockImage;

    const result = setUser({ username, image });

    expect(result).toEqual(expected);
  });

  it('should return a token object with the type of GET_TOKEN', () => {
    const expected = { type: 'GET_TOKEN', token: tokenMock };
    const result = getToken(tokenMock);

    expect(expected).toEqual(result);
  });

  it('should return a location object with the type of GET_LOCATION', () => {
    const longMock = '3214321504';
    const latMock = '2.52343245';
    const mockLocationImage = 'https://via.placeholder.com/350x150';
    const vcMock = [0, 0, 0, 0, 0, 0];

    const expected = {
      type: 'GET_LOCATION',
      long: longMock,
      lat: latMock,
      locationImage: mockLocationImage,
      verificationCode: vcMock
    };

    const result = getLocation(mockLocation);

    expect(expected).toEqual(result);
  });

  it('should set setForm to true with a type of SET_FORM_ACTIVE ', () => {

    const expected = { type: 'SET_FORM_ACTIVE', setForm: true };
    const result = setFormActive(true)

    expect(expected).toEqual(result);

  });

  it('should set setForm to true with a type of SET_CONFIRM_ACTIVE ', () => {

    const expected = { type: 'SET_CONFIRM_ACTIVE', setConfirm: true };
    const result = setConfirm(true)

    expect(expected).toEqual(result);


  });

  it('should reset the confirm property with a type of RESET_FORM_ACTIVE ', () => {

    const expected = { type: 'RESET_FORM_ACTIVE' };
    const result = resetFormActive()

    expect(expected).toEqual(result);

  });

  it('should reset the confirm property with a type of RESET_CONFIRM_ACTIVE ', () => {

    const expected = { type: 'RESET_CONFIRM_ACTIVE' };
    const result = resetConfirm()

    expect(expected).toEqual(result);

  });


});


