export const formActiveReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_FORM_ACTIVE':
      return action.setForm;
    case 'RESET_FORM_ACTIVE':
      return false;
    default:
      return state;
  }
};


