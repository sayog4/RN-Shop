import React from "react";
import { View, Text, Platform, StyleSheet, Image, TouchableNativeFeedback, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import OrdersScreen from "../screens/OrdersScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductScreen from "../screens/ProductScreen";
import DetailScreen from "../screens/DetailScreen";
import CartScreen from "../screens/CartScreen";

import { Ionicons } from "@expo/vector-icons";

const basicStackStyle = {
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  ...TransitionPresets.SlideFromRightIOS,
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? "#ea4c89" : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : "#ea4c89"
};
const HomeStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator 
      screenOptions={basicStackStyle}
      headerMode='float'      
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
};

const CartStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={basicStackStyle}>
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name == "Home") {
            iconName = Platform.OS === "android" ? "md-home" : "ios-home";
          } else if (route.name === "Cart") {
            iconName = Platform.OS === "android" ? "md-cart" : "ios-cart";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        labelStyle: {
          fontSize: 14,
          marginBottom: 0
        },
        activeBackgroundColor: "#ea4c89",
        activeTintColor: "#fff",
        inactiveTintColor: "#000",
        labelPosition: "below-icon"
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Cart" component={CartStack} />
    </Tab.Navigator>
  );
};

const OrderStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={basicStackStyle}>
      <Stack.Screen name="Order" component={OrdersScreen} />
    </Stack.Navigator>
  );
};
let Touch = TouchableOpacity;
if( Platform.OS === 'android' && Platform.version > 21 ){
  Touch = TouchableNativeFeedback;
} 
const DrawerContent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profileWrapper}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{ uri: "https://randomuser.me/api/portraits/men/75.jpg" }}
          />
        </View>
        <View style={styles.desc}>
          <Text style={styles.name}>Bernad Lenon</Text>
          <Text style={styles.email}>Bernad@test.com</Text>
        </View>
      </View>
      <View style={ styles.links }>
        <Touch style={styles.linkWrapper} onPress={ () => navigation.navigate('Home') }>
          <Ionicons name={ Platform.OS === 'android' ? 'md-home' : 'ios-home' } size={23} />
          <Text style={styles.text}>Home</Text>
        </Touch>
        <Touch style={styles.linkWrapper} onPress={ () => navigation.navigate('Order') }>
          <Ionicons name={ Platform.OS === 'android' ? 'md-list' : 'ios-list' } size={23} />
          <Text style={styles.text}>Orders</Text>
        </Touch>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flex: 1,
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  img: {
    height: 150,
    width: 150,
    borderRadius: 75
  },
  desc: {
    alignItems: "center",
    marginVertical: 7
  },
  name: {
    fontSize: 18,
    letterSpacing: 1.2
  },
  email: {
    fontSize: 16
  },
  links:{
    marginTop: 20
  },
  linkWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  },
  text: {
    fontSize: 20,
    letterSpacing: .8,
    marginLeft: 10
  }
});

const Navigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerType="slide"
      drawerStyle={{
        backgroundColor: "#ea4c89"
      }}
      drawerContent={props => <DrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: "#ea4c89",
        labelStyle: {
          fontSize: 18
        }
      }}
    >
      <Drawer.Screen name="Home" component={BottomTab} />
      <Drawer.Screen name="Order" component={OrderStack} />
    </Drawer.Navigator>
  );
};

export default Navigation;
