import React from "react";

import { View, Text, StyleSheet, Image, ScrollView, Platform } from "react-native";

import { Ionicons } from '@expo/vector-icons';

import { useSelector, useDispatch } from "react-redux";
import { addItem } from '../redux/cart/cart.actions';

import Heading from "../components/UI/Heading";
import Btn from "../components/UI/Btn";

const DetailScreen = ({ route: { params }, navigation }) => {

  const dispatch = useDispatch();
  const { title, name } = params;
  navigation.setOptions({
    headerTitle: title
  })
  const newTitle = title
    .split(" ")
    .join("")
    .toLowerCase();

  const detail = useSelector(state => {
    return state.shop.data[name.toLowerCase()].items[newTitle];
  });
  const { company, id, img, info, price } = detail;

  return (
    <ScrollView style={styles.wrapper}>
      <Heading>{title}</Heading>
      <View style={styles.detailWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={{ uri: img }} style={styles.img} />
        </View>
      </View>
      <View style={styles.desc}>
        <Text style={styles.text}>Company: {company}</Text>
        <Text style={styles.text}>Price: $ {price}</Text>
        <Btn text="Add To Cart" click={ () => dispatch( addItem(detail) ) }  />
      </View>
      <View style={styles.features}>
        <Text style={styles.cool}>Some Cool Features : </Text>
        {info.map(list => {
          return (
            <View key={id} style={styles.list}>
              <Ionicons size={22} name={ Platform.OS === 'android' ? 'md-arrow-forward' : 'ios-arrow-forward' } /><Text style={styles.listItem}>{list}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 20,
    marginHorizontal: '4%'
  },
  detailWrapper: {
    justifyContent: "center",
    alignItems: "center"
  },
  imageWrapper: {
    width: "100%",
    height: 300
  },
  img: {
    width: "100%",
    height: "100%"
  },
  desc: {
    padding: 10
  },
  text: {
    fontSize: 18,
    marginBottom: 7
  },
  features: {
    marginTop: 10
  },
  list:{
    flexDirection: 'row',
    // alignItems: 'center'
  },  
  listItem: {
    fontSize: 16,
    marginLeft: 12,
    marginBottom: 7
  },
  cool: {
    fontSize: 20,
    color: "coral",
    marginBottom: 10
  }
});

export default DetailScreen;
