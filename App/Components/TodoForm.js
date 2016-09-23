import React, { PropTypes, Component } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'

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
      <View>
        <TextInput
          value={this.state.text}
          placeHolder="ipnut your todo"
          onChangeText={text => this.setState({ text })}
        />
        <TouchableOpacity onPress={() => this.handleOnPress(onPress)}>
          <Text>ADD</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

export default TodoForm
