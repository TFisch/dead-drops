export const confirmReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_CONFIRM_ACTIVE':
      return action.setConfirm;
    case 'RESET_CONFIRM_ACTIVE':
      return {};
    default:
      return state;
  }
}