/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import {Text} from 'react-native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <MainNavigation/>
    </NavigationContainer>
  );
};
export default App;
