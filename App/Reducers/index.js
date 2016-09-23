import { combineReducers } from 'redux'
import TodoReducer from './TodoReducer'

// glue all the reducers together into 1 root reducer
export default combineReducers({
  todo: TodoReducer,
})
