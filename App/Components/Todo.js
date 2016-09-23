import React, { PropTypes } from 'react'
import { Text } from 'react-native'

const Todo = props => <Text>{props.todo}</Text>

Todo.propTypes = {
  todo: PropTypes.string.isRequired,
}

export default Todo
