import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const TodoStyle = StyleSheet.create({
  row: {
    flex: 1,
    height: Metrics.row,
    marginHorizontal: Metrics.marginHorizontal,
    paddingVertical: Metrics.marginVertical,
  },
  text: {
    color: Colors.primary_text,
    fontWeight: 'bold',
    fontSize: 14,
  },
})

export default TodoStyle
