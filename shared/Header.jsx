import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function Header({ navigation, title }) {
  return (
    <View style={styles.header}>
      <MaterialIcons
        onPress={() => navigation.openDrawer()}
        name="menu"
        size={32}
        color="white"
        style={styles.icon}
      />

      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    paddingHorizontal: 15,
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
