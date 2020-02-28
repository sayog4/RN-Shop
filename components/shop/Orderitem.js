import React from 'react';

import { View, Text, StyleSheet } from 'react-native';
import Card from '../UI/Card';

const Orderitem = ({ id, title, quantity, price }) => {
  return (
    <Card id={id}>
      <View style={ styles.container }>
        <Text style={ styles.title }>{ title }</Text>
        <Text style={ styles.quantity }>Quantity: { quantity }</Text>
        <Text style={ styles.price }>Price: $ { price }</Text>
      </View>
    </Card>
  );
}
const styles = StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center"
  },
  title:{
    fontSize: 19
  },
  quantity: {
    fontSize: 16
  },
  price:{
    fontSize: 17
  }
})

export default Orderitem;