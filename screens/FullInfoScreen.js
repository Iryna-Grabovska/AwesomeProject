import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { gStyle } from "../styles/style";

export default function FullInfoScreen({ route }) {
  return (
    <View>
      <Image
        source={{
          width: "100%",
          height: 200,
          uri: route.params.img,
        }}
      />
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  full: {
    fontSize: 18,
    fontWeight: "light",
    textAlign: "center",
    marginTop: 20,
    color: "#f55151",
  },
});
