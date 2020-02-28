import React from 'react';
import { Platform } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import CartScreen from '../screens/CartScreen';

const CartStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? '#6c5ce7' : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : '#6c5ce7'
      }}
    >
      <Stack.Screen name='Cart' component={CartScreen} />
    </Stack.Navigator>
  );
}

export default CartStack;