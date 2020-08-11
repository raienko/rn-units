import React, {useRef} from 'react';
import {TouchableOpacity} from 'react-native';

export default function Touchable({onPress, delay = 0, ...rest}) {
  const timestamp = useRef(0);

  const handlePress = () => {
    const now = Date.now();
    const diff = now - timestamp.current;
    if (diff < delay) {
      return;
    }

    timestamp.current = now;

    if (onPress) {
      requestAnimationFrame(onPress);
    }
  };

  return (
    <TouchableOpacity
      {...rest}
      onPress={handlePress}
    />
  );
}
