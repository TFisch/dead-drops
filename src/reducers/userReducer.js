export const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'GET_IMAGE':
      return { ...state, image: action.image };
    case 'GET_TOKEN':
      return { ...state, token: action.token };
    default:
      return state;
  }
}






