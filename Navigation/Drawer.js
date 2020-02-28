import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './BottomTab';
import OrdersScreen from '../screens/OrdersScreen';


const Drawer = (props) => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={BottomTab} />
      <Drawer.Screen name='Order' component={OrdersScreen} />
    </Drawer.Navigator>
  );
}

export default Drawer;