import React from 'react';

import { View, Text, FlatList } from 'react-native';
import ItemPreview from '../components/shop/ItemPreview';

import Heading from '../components/UI/Heading';

import { useSelector } from 'react-redux';

const ProductScreen = ({ route: { params }, navigation }) => {
  
  const query = params.query;
  navigation.setOptions({
    headerTitle: query
  })
  const product = useSelector( state => {
    return state.shop.data[query.toLowerCase()].items
  } );
 
  const arr = Object.keys( product ).map( key => product[key] );
  return (
    <>
    <Heading>{query}</Heading>
    <FlatList 
      keyExtractor={ (item) => item.id.toString() }
      data = {arr}
      renderItem={({ item }) => <ItemPreview 
        name={query}
        item={item}
        navigation={navigation}
      /> }
    />
    </>
  );
}

export default ProductScreen;