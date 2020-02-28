import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../redux/cart/cart.actions';

import Card from '../UI/Card';

const CartItem = ({ item }) =>{
  const dispatch = useDispatch();

  const { img, id, title, price, company, quantity } = item;
  return (
    <Card>
      <View style={ styles.cartItem }>
        <View style={ styles.imgWrapper }>
          <Image style={styles.img} source={{ uri: img }} />
        </View>
        <View style={ styles.desc }>
        <View style={{ flexDirection: 'row', width: "100%" } }>
          <Text numberOfLines={2} style={ styles.title }>{ title }</Text>          
        </View>
          <Text style={ styles.text }>Company: { company }</Text>
          <Text style={ styles.text }>Price: $ { price }</Text>
          <View style={styles.btnContainer}>
            <Button title="Add  +" color='pink' onPress={ () => dispatch( addItem( item ) ) } />
            <Text style={ styles.quantity }>{ quantity }</Text>
            <Button title="Remove  -" color='pink' onPress={ () => dispatch( removeItem( item ) ) } />
          </View>
        </View>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row'
  },
  imgWrapper: {
    width: 130,
    height: 120
  },
  img: {
    width: '100%',
    height: '100%'
  },
  title:{
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 15
  },
  desc:{
    flex: 1, padding: 10, marginLeft: 8,
    justifyContent: 'center', alignItems: 'center'
  },
  quantity: {
    fontSize: 16, marginHorizontal: 7
  },
  btnContainer:{
    flexDirection: "row",
    alignItems: "center"
  }
});

export default CartItem;