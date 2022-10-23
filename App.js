import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "./styles/style";
import * as Font from "expo-font";
import MainStack from "./navigation.js";
import { AppLoading } from "expo";

const LoadFonts = async () => {
  await Font.loadAsync({
    "Montserrat-Italic": require("./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf"),
    "Montserrat-Variable": require("./assets/fonts/Montserrat-VariableFont_wght.ttf"),
  });
};

export default function App() {
  const [isFont, setisFont] = useState(false);
  if (isFont) {
    return (
      <AppLoading startAsync={LoadFonts} onFinish={() => setisFont(true)} />
    );
  }
  return <MainStack />;
}

const styles = StyleSheet.create({});
