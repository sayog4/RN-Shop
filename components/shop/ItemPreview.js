import React from "react";

import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
  Button
} from "react-native";

import Btn from '../UI/Btn';

import { addItem } from '../../redux/cart/cart.actions';
import { useDispatch } from 'react-redux';

const ItemPreview = ({ item, navigation, name}) => {

  const dispatch = useDispatch();

  const { title, img, price, company } = item;
  let Touch = TouchableOpacity;
  if (Platform.OS === "android" && Platform.Version >= 21) {
    Touch = TouchableNativeFeedback;
  }
  return (
    <Touch useForeground={true} onPress={() => navigation.navigate('Detail',{
      title: title,
      name: name
    })}>
      <View style={styles.wrapper}>
        <View style={styles.imgContainer}>
          <Image source={{ uri: img }} style={styles.img} />
        </View>
        <View style={styles.desc}>
          <Text style={styles.title}>{title} </Text>
          <Text style={styles.text}>Price: $ {price} </Text>
          <Text style={styles.text}>Company: {company} </Text>
        </View>
        <Btn text='Add to cart' click={ () => dispatch( addItem(item) ) } />
      </View>
    </Touch>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    padding: 15,
    margin: 15,
    shadowColor: "#000",
    shadowOffset: { height: 0, width: 2 },
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3,
    backgroundColor: "#fff"
  },
  imgContainer: {
    width: "90%",
    height: 180,
    borderBottomColor: "#000",
    paddingBottom: 3,
    borderBottomWidth: 1
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  desc: {
    padding: 7,
    marginVertical: 5
  },
  title: {
    fontSize: 20,
    marginBottom: 5
  },
  text: {
    fontSize: 18
  }
});

export default ItemPreview;
