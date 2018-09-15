export const setUser = ({ username, image }) => ({
  type: 'SET_USER',
  username,
  image
});

export const getToken = (token) => ({
  type: 'GET_TOKEN',
  token
});

export const getLocation = ({ long, lat, image }) => ({
  type: 'GET_LOCATION',
  long,
  lat,
  image
})
