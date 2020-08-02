import React from 'react';
import {StyleSheet, View, Keyboard, LayoutAnimation} from 'react-native';
import {screenHeight, combineStyles} from '../';

export default class extends React.PureComponent {
  constructor(props) {
    super(props);
    Keyboard.addListener('keyboardWillChangeFrame', this.handleKeyboardOffset);
    this.state = {
      keyboardHeight: 0,
    };
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardWillChangeFrame', this.handleKeyboardOffset);
  }

  handleKeyboardOffset = (e) => {
    const event = { ...e };
    const KEYBOARD_OPEN = event.endCoordinates.screenY !== screenHeight;
    const { height } = event.endCoordinates;
    this.animate(event.duration);
    this.setState({ keyboardHeight: KEYBOARD_OPEN ? height : 0 });
  };

  animate = (duration) => {
    LayoutAnimation.configureNext({
      duration,
      create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
      },
      update: { type: LayoutAnimation.Types.easeInEaseOut },
    });
  };

  render() {
    const { children, style, ...rest } = this.props;
    const { keyboardHeight } = this.state;
    return (
      <View
        {...rest}
        style={combineStyles(
          style,
          styles.wrapper,
          { marginBottom: keyboardHeight }
        )}
      >
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});
