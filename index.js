import { Dimensions, Platform } from 'react-native';

export const {
  width: screenWidth,
  height: screenHeight
} = Dimensions.get('screen');

export const vw = (size = 0) => Math.floor((screenWidth / 100) * size);

export const vh = (size = 0) => Math.floor((screenHeight / 100) * size);

export const rem = (size = 0) => Math.floor((screenWidth / 380) * size);

export const isIOS = Platform.OS === 'ios';

export const isAndroid = Platform.OS === 'android';

export const doNothing = () => {};

export const combineStyles = (...styles) => styles.reduce((acc, style) => acc.concat(style), []);

export const img = (source) => typeof source === 'string' ? { uri: source } : source;

export const generateMatrix = (x, y, value) => Array(y).fill().map(() => Array(x).fill(value));

export const wait = (timeout = 0) => new Promise(resolve => setTimeout(resolve, timeout));

export const seconds = (amount = 0) => amount * 1000;

export const minutes = amount => seconds(60) * amount;

export const hours = amount => minutes(60) * amount;

export const days = amount => hours(24) * amount;

export const throwError = (message, code, data) => {
  const error = new Error(message);
  error.code = code;
  error.data = data;
  throw error;
}
