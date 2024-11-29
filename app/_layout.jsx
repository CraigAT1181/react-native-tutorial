import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "../routes/HomeStack";
import AboutStack from "../routes/AboutStack";

const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeStack} />
      <Drawer.Screen name="About" component={AboutStack} />
    </Drawer.Navigator>
  );
}
