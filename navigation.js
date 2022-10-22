import React from "react";
import MainScreem from "./screens/MainScreem";
import FullInfoScreen from "./screens/FullInfoScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreem}
          options={{
            title: "FrejaTECH",
            headerStyle: { backgroundColor: "#eb3d9d" },
            headerTitleStyle: { fontWeight: "300" },
          }}
        />
        <Stack.Screen
          name="FullInfoScreen"
          component={FullInfoScreen}
          options={{ title: "info anons" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
