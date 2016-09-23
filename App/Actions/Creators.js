import Types from './Types'

const addTodo = text => ({ type: Types.ADD_TODO, text })

export default {
  addTodo,
}
