import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
} from "react-native";

import CartItem from "../components/shop/CartItem";
import CustomButton from "../components/UI/CustomButton";
import Blank from "../components/shop/Blank";
import Btn from '../components/UI/Btn';

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import { clearItemFromCart, orderNow } from "../redux/cart/cart.actions";

const CartScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);
  navigation.setOptions({
    headerTitle: "Cart Items",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomButton}>
        <Item
          title="menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  });
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.cart.cartItems);

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <Blank message="Please add items in cart." />;
  }

  return (
    <React.Fragment>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CartItem item={item} />}
      />
      <View style={styles.total}>
        <Text style={styles.amount}>Total Amount: $ {total}</Text>
      </View>
      <Btn
        text="Order Now !!!"
        color="orangered"
        click={ () => {
          dispatch(orderNow(cartItems));
          dispatch(clearItemFromCart());
        }}
      />
    </React.Fragment>
  );
};
const styles = StyleSheet.create({
  total: {
    padding: 20
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default CartScreen;
