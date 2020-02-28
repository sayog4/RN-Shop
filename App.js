import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Navigation from "./Navigation/Navigation";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {}
});
