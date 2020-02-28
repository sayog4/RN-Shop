import React from "react";

import { ScrollView, Platform } from "react-native";

import Card from "../components/UI/Card";
import HomePreview from "../components/shop/HomePreview";
import CustomButton from '../components/UI/CustomButton';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'Your Shop',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ CustomButton }>
        <Item title='menu' iconName={ Platform.OS === 'android' ? 'md-menu' : 'ios-menu' } onPress={ () => navigation.toggleDrawer() } />
      </HeaderButtons>
    )
  })
  return (
    <ScrollView>
      <Card>
        <HomePreview
          text="Laptop"
          image="https://i.ibb.co/qCTT5Kj/product-9.jpg"
          navigation={navigation}
        />
      </Card>
      <Card>
        <HomePreview text="Mobile"
          navigation={navigation} 
          image="https://i.ibb.co/tDcTVB7/m-6.jpg" />
      </Card>
      <Card>
        <HomePreview
          text="Television"
          navigation={navigation} 
          image="https://i.ibb.co/p49f5WZ/t-3.jpg"
        />
      </Card>
      <Card>
        <HomePreview text="MicrowaveOven" 
        navigation={navigation}
        image="https://i.ibb.co/mXjD5Cw/mo-9.jpg" />
      </Card>
      <Card>
        <HomePreview text="Camera" 
        navigation={navigation}
        image="https://i.ibb.co/7SH5j3R/c-10.jpg" />
      </Card>
    </ScrollView>
  );
}

export default HomeScreen;
