export const getProfileImage = (userInfo) => ({
  type: 'GET_IMAGE',
  userInfo
});

export const getToken = (token) => ({
  type: 'GET_TOKEN',
  token
});