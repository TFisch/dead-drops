import { combineReducers } from 'redux';
import { userReducer } from '../reducers/userReducer'
import { tokenReducer } from '../reducers/tokenReducer'

export const rootReducer = combineReducers({
  user: userReducer
})
