import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes'

const TodoFormStyle = StyleSheet.create({
  form: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    marginHorizontal: Metrics.marginHorizontal,
    backgroundColor: 'transparent',
  },
  button: {
    height: 48,
    width: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.accent_color,
  },
  text: {
    color: Colors.white,
  },
})

export default TodoFormStyle
