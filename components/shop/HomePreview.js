import React from 'react';

import { View, Text, StyleSheet, ImageBackground, Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const HomePreview = ({ image, text, navigation }) => {
  let Touch = TouchableOpacity;
  if( Platform.OS ==='android' && Platform.Version >= 21){
    Touch = TouchableNativeFeedback;
  }

  return (
    <Touch useForeground={true} onPress={ () => navigation.navigate('Product',{ query: text }) }>
      <View style={styles.wrapper} >
        <View style={ styles.imgContainer }>
          <ImageBackground 
            source={{ uri: image }} 
            style={ styles.img }>
            <Text style={ styles.title }> { text } </Text>
          </ImageBackground>
        </View>
      </View>
    </Touch>
  );
};

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor: '#fff'
  },
  imgContainer: {
    width: '100%',
    height: 250,
  },
  img:{
    width: '100%',
    height: '100%',
    justifyContent: "center",
    alignItems: 'center',
  },
  title:{
    color: '#000',
    fontSize: 30,
    backgroundColor: 'rgba(255,255,255,.7)',
    padding: 5
  }
});

export default HomePreview;