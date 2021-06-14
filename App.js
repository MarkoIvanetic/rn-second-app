import React, { useState } from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";
import { useFonts } from "expo-font";
import { AppLoading } from "expo";

export default function App() {
  const [loaded, error] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!loaded) {
    return <AppLoading></AppLoading>;
  }

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
