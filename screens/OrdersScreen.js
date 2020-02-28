import React from 'react';
import { FlatList, Platform } from 'react-native';

import { useSelector } from 'react-redux';

import OrderItem from '../components/shop/Orderitem';
import Heading from '../components/UI/Heading';
import Blank from '../components/shop/Blank';

import CustomButton from '../components/UI/CustomButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const OrdersScreen = ({ navigation }) => {

  navigation.setOptions({
    headerTitle: 'Orders',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ CustomButton }>
        <Item title='menu' iconName={ Platform.OS === 'android' ? 'md-menu' : 'ios-menu' } onPress={ ()=> navigation.toggleDrawer() } />
      </HeaderButtons>
    )
  })

  const Orders = useSelector( state => state.cart.orders );
  
  if( Orders.length === 0 ){
    return <Blank message="You haven't place any Orders yet!!!" />
  }
  return (
    <>
    <Heading>Your Recent Orders !!!!</Heading>
    <FlatList 
      data={ Orders }
      keyExtractor={ item => item.id.toString() }
      renderItem={ ( {item} ) => <OrderItem 
        title={item.title}
        price={item.price}
        quantity={item.quantity}
      />}
    />
    </>
  );
}

export default OrdersScreen;