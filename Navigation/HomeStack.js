import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import ProductScreen from '../screens/ProductScreen';
import DetailScreen from '../screens/DetailScreen';

const HomeStack = () => {

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '#6c5ce7' : ''        
      },
      headerTintColor: Platform.OS === 'android' ? '#fff' : '#6c5ce7'
    }}>
      <Stack.Screen name='Home' component={ HomeScreen } />
      <Stack.Screen name='Product' component={ ProductScreen } />
      <Stack.Screen name='Detail' component={ DetailScreen } />
    </Stack.Navigator>
  );
}

export default HomeStack;