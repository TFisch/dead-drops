import { combineReducers } from 'redux';
import { tokenReducer } from '../tokenReducer'
import { userReducer } from '../userReducer'
import { locationReducer } from '../locationReducer'

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer,
  location: locationReducer
})
