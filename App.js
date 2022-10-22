import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { gStyle } from "./styles/style";
import * as Font from "expo-font";
import MainStack from "./navigation.js";

// import * as SplashScreen from "expo-splash-screen";
// import AppLoading from "expo-app-loading";

// SplashScreen.preventAutoHideAsync();
export default function App() {
  const [font, setFont] = useState(false);
  // if (font) {
  return <MainStack />;
  // } else {
  //   return <AppLoading />;
  // }
}

const styles = StyleSheet.create({});
