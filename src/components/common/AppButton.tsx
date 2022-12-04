import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  text: string;
  textColor: string;
  onPress: () => void;
  color: string;
};

const AppButton: React.FC<Props> = ({ color, onPress, text, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, { backgroundColor: color }]}
  >
    <Text style={[styles.text, { color: textColor }]}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderRadius: 3,
    height: 40,
    maxHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
  },
});

export default AppButton;
