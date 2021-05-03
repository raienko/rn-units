const {Dimensions, Platform, StyleSheet} = require('react-native');

const {width: screenWidth, height: screenHeight} = Dimensions.get('screen');

const isLandscape = screenWidth > screenHeight;

const isPortrait = !isLandscape;

const base = isLandscape ? screenHeight : screenWidth;

const magicNumber = 380;

const vw = (size = 0) => Math.floor((screenWidth / 100) * size);

const vh = (size = 0) => Math.floor((screenHeight / 100) * size);

const rem = (size = 0) => Math.floor((base / magicNumber) * size);

const font = size => {
  let cof = 1;

  if (base < magicNumber) {
    cof = base / magicNumber;
  }

  return Math.round(size * cof);
};

const isIOS = Platform.OS === 'ios';

const isAndroid = Platform.OS === 'android';

const combineStyles = (styleA, ...rest) => StyleSheet.compose(styleA, rest);

const img = source => (typeof source === 'string' ? {uri: source} : source);

const wait = (timeout = 0) =>
  new Promise(resolve => setTimeout(resolve, timeout));

const seconds = (amount = 0) => amount * 1000;

const minutes = amount => seconds(60) * amount;

const hours = amount => minutes(60) * amount;

const days = amount => hours(24) * amount;

const weeks = amount => days(7) * amount;

module.exports = {
  screenWidth,
  screenHeight,
  isLandscape,
  isPortrait,
  vw,
  vh,
  rem,
  font,
  isIOS,
  isAndroid,
  combineStyles,
  img,
  wait,
  seconds,
  minutes,
  hours,
  days,
  weeks,
};
