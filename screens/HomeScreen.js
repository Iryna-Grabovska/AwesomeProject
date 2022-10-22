import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import styled from "styled-components/native";

const Post = styled.View`
  padding: 15px;
  background_color: red;
  border-bottom-width: 1px;
`;

export default function HomeScreen() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({ headerShow: false });
  }, []);

  return <View></View>;
}
