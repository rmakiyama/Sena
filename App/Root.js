import React from 'react'
import {
  StatusBar,
  View,
} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './Reducers'
import MainView from './Containers/MainView'
import RootStyle from './Containers/Styles/RootStyle'

const store = createStore(reducers)

const Root = () => (
  <Provider store={store}>
    <View style={RootStyle.applicationView}>
      <StatusBar />
      <MainView />
    </View>
  </Provider>
)

export default Root
