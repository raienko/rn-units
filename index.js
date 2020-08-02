import { Dimensions, Platform } from 'react-native';

export const {
  width: screenWidth,
  height: screenHeight
} = Dimensions.get('screen');

export const vw = size => Math.floor((screenWidth / 100) * size);

export const vh = size => Math.floor((screenHeight / 100) * size);

export const rem = size => Math.floor((screenWidth / 380) * size);

export const isIOS = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

export const doNothing = () => {};

export const combineStyles = (...styles) => styles.reduce((acc, style) => acc.concat(style), []);
