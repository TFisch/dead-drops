export const locationReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      return { longitude: action.long, latitude: action.lat, image: action.image };
    default:
      return state;
  }
}


