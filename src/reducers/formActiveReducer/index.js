export const formActiveReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FORM_ACTIVE':
      return action.setForm;
    case 'RESET_FORM_ACTIVE':
      return {};
    default:
      return state;
  }
};


