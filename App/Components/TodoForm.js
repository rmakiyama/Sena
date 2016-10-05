import React, { PropTypes, Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import styles from './Styles/TodoFormStyle'

class TodoForm extends Component {

  static propTypes = {
    onPress: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.state = {
      text: '',
    }
  }

  handleOnPress = (onPress) => {
    if (this.state.text === '') {
      return
    }
    onPress(this.state.text)
    this.setState({ text: '' })
  }

  render() {
    const { onPress } = this.props
    return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={this.state.text}
          placeholder="input your todo"
          onChangeText={text => this.setState({ text })}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.handleOnPress(onPress)}
        >
          <Text style={styles.text}>✈</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default TodoForm
