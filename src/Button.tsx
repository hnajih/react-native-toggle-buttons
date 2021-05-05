import React from 'react';
import {
  View,
  Text,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

import { lightOrDark } from './h';

type ButtonType = {
  title?: string;
  color?: string;
  textColor?: string;
  containerStyle?: ViewStyle | ViewStyle[] | {};
  textStyle?: TextStyle;
  onPress?: () => void;
};

export default function Button({
  title,
  color: backgroundColor,
  textColor: color,
  containerStyle,
  textStyle,
  onPress,
}: ButtonType) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[{ backgroundColor, padding: 10 }, containerStyle]}>
        <Text
          style={[
            {
              fontSize: 18,
              color: color
                ? color
                : lightOrDark(backgroundColor) === 'dark'
                ? 'white'
                : 'black',
            },
            textStyle,
          ]}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
