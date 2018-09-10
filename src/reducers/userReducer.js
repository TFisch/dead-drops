export const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_IMAGE':
      return action.image; 
    default:
      return state;
  }
}






