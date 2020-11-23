import React from 'react';
import {View, StyleSheet} from 'react-native';
import {combineStyles} from './';

export default function Row({style, ...rest}) {
  return <View {...rest} style={combineStyles(styles.wrapper, style)} />;
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
