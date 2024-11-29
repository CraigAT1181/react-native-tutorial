import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../app/screens/home";
import ReviewDetails from "../app/screens/reviewDetails";
import Header from "@/shared/Header";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: "#333" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation} title={"GameZone"} />
          ),
        }}
      />
      <Stack.Screen
        name="Review Details"
        component={ReviewDetails}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </Stack.Navigator>
  );
}
