import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactElement | React.ReactElement[];
  style?: StyleProp<ViewStyle>;
};

const Row: React.FC<Props> = ({ children, style }) => (
  <View style={[styles.row, style]}>{children}</View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});

export default Row;
