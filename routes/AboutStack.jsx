import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../app/screens/about";
import Header from "@/shared/Header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      initialRouteName="About"
      screenOptions={{
        headerStyle: { backgroundColor: "#555" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          header: ({ navigation, route }) => (
            <Header navigation={navigation} title={"About"} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
