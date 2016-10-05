import React, { PropTypes, Component } from 'react'
import { View, ListView } from 'react-native'

import Todo from '../Components/Todo'
import styles from './Styles/TodoListStyle'

class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.array,
  }

  constructor(props) {
    super(props)

    const todos = props.todos

    const rowHasChanged = (r1, r2) => r1 !== r2
    const ds = new ListView.DataSource({ rowHasChanged })
    this.state = {
      dataSource: ds.cloneWithRows(todos),
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.todos !== this.props.todos) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps),
      })
    }
  }

  render() {
    return (
      <ListView
        style={{ flex: 1 }}
        dataSource={this.state.dataSource}
        renderRow={todo => <Todo todo={todo} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
      />
    )
  }

}

export default TodoList
