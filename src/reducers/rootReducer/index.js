import { combineReducers } from 'redux';
import { tokenReducer } from '../tokenReducer';
import { userReducer } from '../userReducer';
import { locationReducer } from '../locationReducer';
import { formActiveReducer } from '../formActiveReducer';
import { confirmReducer } from '../confirmReducer';

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  locationData: locationReducer,
  setConfirm: confirmReducer,
  formActive: formActiveReducer
});
