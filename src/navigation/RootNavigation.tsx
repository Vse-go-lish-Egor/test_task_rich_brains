import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import MainPage from '../pages/main/MainPage';

export type RootStackParamList = {
  MainScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
  headerShown: false,
};
const RootNavigator: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="MainScreen" component={MainPage} />
    </Stack.Navigator>
  </NavigationContainer>
);
export default RootNavigator;
