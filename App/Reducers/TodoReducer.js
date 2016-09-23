import { createReducer } from 'reduxsauce'
import immutable from 'seamless-immutable'
import Types from '../Actions/Types'

export const INITIAL_STATE = immutable({
  todos: [],
})

const addTodo = (state, action) =>
  state.merge({
    todos: state.todos.concat([action.text]),
  })


// ActionハンドラとActionTypesをマッピング
const ACTION_HANDLERS = {
  [Types.ADD_TODO]: addTodo,
}

export default createReducer(INITIAL_STATE, ACTION_HANDLERS)
