import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";

export default function Home({ navigation }) {
  const pressHandler = () => {
    // -- 2 ways to navigate -- //

    // navigation.navigate("Review Details");
    navigation.push("Review Details");
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home screen</Text>
      <Button title="Review Details" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
