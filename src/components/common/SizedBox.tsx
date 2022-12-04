import React from 'react';
import { View } from 'react-native';

type Props = {
  width?: number;
  height?: number;
};

const SizedBox: React.FC<Props> = ({ height, width }) => (
  <View style={{ height, width }} />
);

export default SizedBox;
