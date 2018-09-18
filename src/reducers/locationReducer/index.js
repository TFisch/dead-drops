export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return {
        longitude: action.long,
        latitude: action.lat,
        image: action.locationImage,
        verificationCode: action.verificationCode
      };
    default:
      return state;
  }
};


