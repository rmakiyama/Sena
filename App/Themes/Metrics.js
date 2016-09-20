import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  marginHorizontal: 16,
  marginVertical: 16,
  section: 25,
  baseMargin: 16,
  doubleBaseMargin: 26,
  smallMargin: 8,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  icons: {
    tiny: 18,
    small: 24,
    medium: 36,
    large: 48,
    xl: 60,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300,
  },
}

export default metrics
