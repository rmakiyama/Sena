import React, { PropTypes } from 'react'
import {
  View,
} from 'react-native'
import { connect } from 'react-redux'

import TodoList from './TodoList'
import TodoForm from '../Components/TodoForm'
import Actions from '../Actions/Creators'
import styles from './Styles/MainViewStyle'

const MainView = ({ addTodo, todos }) => (
  <View style={styles.main}>
    <TodoList style={styles.list} todos={todos} />
    <TodoForm style={styles.form} onPress={text => addTodo(text)} />
  </View>
)

MainView.propTypes = {
  addTodo: PropTypes.func,
  todos: PropTypes.array,
}

const mapStateToProps = state => (
  {
    todos: state.todo.todos,
  }
)
// dispatchは基本的にpropsで渡す
const mapDispatchToProps = dispatch => (
  {
    addTodo: text => dispatch(Actions.addTodo(text)),
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
