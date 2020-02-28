import React from 'react';
import { View, Text, Platform, TouchableOpacity,TouchableNativeFeedback, StyleSheet } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const Btn = ({ text, click }) => {
  let TouchWrap = TouchableOpacity;
  if( Platform.OS === 'android' && Platform.Version > 21 ){
    TouchWrap = TouchableNativeFeedback;
  }
  return (
    <TouchWrap useForeground={true} onPress={ click }>
      <View style={ styles.iconWrap }>
        <Text style={ styles.title }>{ text }</Text><Ionicons name={ Platform.OS === 'android' ? 'md-cart' : 'ios-cart' } color='#000' size={27} />
      </View>
    </TouchWrap>
  );
}
const styles = StyleSheet.create({
  iconWrap: {
    flexDirection: "row",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'coral',
    backgroundColor: '#81ecec',
    shadowColor: 'black',
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 3,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center'

  },
  title: {
    fontSize: 17,
    marginRight: 7,
  }
})
export default Btn;