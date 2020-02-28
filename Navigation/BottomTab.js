import React from 'react';
import { View, Text, TouchableOpacity, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
import CartStack from './CartStack';
import { Ionicons } from '@expo/vector-icons';

const BottomTab = (props) => {
  
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
    initialRouteName='Home'
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if( route.name == 'Home' ){
              iconName = Platform.OS === 'android' ? 'md-home' : 'ios-home'
            }else if( route.name === 'Cart' ){
              iconName = Platform.OS === 'android' ? 'md-cart' : 'ios-cart'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          }
        })
      }
      tabBarOptions={{
        labelStyle: {
        fontSize: 14,
        marginBottom: 0
      },
      activeBackgroundColor: '#673ab7',
      activeTintColor: '#fff',
      inactiveTintColor: '#000',
      labelPosition: "below-icon", 
            
    }} >
      <Tab.Screen name='Home' component={ HomeStack } />
      <Tab.Screen name='Cart' component={ CartStack } />
    </Tab.Navigator>
  );
}

export default BottomTab;