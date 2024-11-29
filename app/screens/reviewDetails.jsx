import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { globalStyles } from "@/styles/global";

export default function ReviewDetails({ navigation }) {
  // Function to return to the previous screen (it pops a screen off the stack)
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>Review details screen</Text>
      <Button title={"Return Home"} onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({});
