import React from "react";

import { View, Text, StyleSheet } from 'react-native';

const Heading = ({ children }) => {
  return (
    <View style={ styles.container }>
      <Text style={styles.heading}>{children}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading:{
    fontSize: 28,
    color: '#e84393',
    textTransform: 'uppercase'
  }
});

export default Heading;
