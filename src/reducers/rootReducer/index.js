import { combineReducers } from 'redux';
import { tokenReducer } from '../tokenReducer'
import { userReducer } from '../userReducer'

export const rootReducer = combineReducers({
  token: tokenReducer,
  user: userReducer
})
