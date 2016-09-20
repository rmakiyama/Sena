import React from 'react'
import {
  StatusBar,
  Text,
  View,
} from 'react-native'

import RootStyle from './Containers/Styles/RootStyle'

const Root = () => (
  <View style={RootStyle.applicationView}>
    <StatusBar />
    <Text>Hayo, sena.</Text>
  </View>
)

export default Root
