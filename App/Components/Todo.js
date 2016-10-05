import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

import styles from './Styles/TodoStyle'

const Todo = props => (
  <View style={styles.row}>
    <Text style={styles.text}>□　{props.todo}</Text>
  </View>
)
Todo.propTypes = {
  todo: PropTypes.string.isRequired,
}

export default Todo
