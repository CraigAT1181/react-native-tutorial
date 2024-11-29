import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, View, Text, Image } from "react-native";

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
      <View style={styles.headerTitle}>
        <Text style={styles.headerText}>{title}</Text>
        <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 55,
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
  headerImage: {
    width: 26,
    height: 26,
  },
  headerTitle: {
    flexDirection: "row",
  },
});
