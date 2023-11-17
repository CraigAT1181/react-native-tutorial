import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("craig");
  const [age, setAge] = useState("42");

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. John Doe"
        onChangeText={(value) => setName(value)}
      />

      <Text>Enter Age:</Text>
      <TextInput
        keyboardType="numeric" //Can't see the effect on web. Need to install Android Simulator.
        style={styles.input}
        placeholder="e.g. 35"
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        Name: {name}, Age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
