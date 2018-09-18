export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { username: action.username, image: action.image };
    default:
      return state;
  }
};