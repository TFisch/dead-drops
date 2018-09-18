export const setUser = ({ username, image }) => ({
  type: 'SET_USER',
  username,
  image
});

export const getToken = (token) => ({
  type: 'GET_TOKEN',
  token
});

export const getLocation = ({ long, lat, locationImage, verificationCode }) => ({
  type: 'GET_LOCATION',
  long,
  lat,
  locationImage,
  verificationCode
});

export const setFormActive = (setForm) => ({
  type: 'SET_FORM_ACTIVE',
  setForm
});

export const setConfirm = (setConfirm) => ({
  type: 'SET_CONFIRM_ACTIVE',
  setConfirm
});

export const resetFormActive = () => ({
  type: 'RESET_FORM_ACTIVE'
});

export const resetConfirm = () => ({
  type: 'RESET_CONFIRM_ACTIVE'
});
