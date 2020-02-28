import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Blank = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{ message }</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  text:{
    fontSize: 20,
    color: 'orangered'
  }
});

export default Blank;