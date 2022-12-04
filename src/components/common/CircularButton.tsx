import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  radius: number;
  color: string;
  children: React.ReactElement;
  onPress: () => void;
};

const CircularButton: React.FC<Props> = ({
  children,
  color,
  radius,
  onPress,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[
      {
        width: radius,
        height: radius,
        backgroundColor: color,
        borderRadius: radius * 10,
      },
      styles.button,
    ]}
  >
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircularButton;
