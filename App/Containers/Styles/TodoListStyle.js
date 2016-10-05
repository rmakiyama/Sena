import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const TodoListStyle = StyleSheet.create({
  separator: {
    height: Metrics.horizontalLineHeight,
    backgroundColor: Colors.divider_color,
  },
})

export default TodoListStyle
