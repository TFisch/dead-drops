export const confirmReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_CONFIRM_ACTIVE':
      return action.setConfirm;
    case 'RESET_CONFIRM_ACTIVE':
      return false;
    default:
      return state;
  }
};