import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
  return (
    <View style={{ ...styles.card, ...style }}>
      { children }
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  }
})

export default Card;