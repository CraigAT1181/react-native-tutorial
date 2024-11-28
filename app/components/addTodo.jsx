import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [userInput, setUserInput] = useState("");

  const changeHandler = (val) => {
    setUserInput(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="add new todo..."
        value={userInput}
        onChangeText={(val) => changeHandler(val)}
      />
      <Button
        onPress={() => {
          submitHandler(userInput);
          setUserInput("");
        }}
        title="Add Todo"
        color={"#ddd"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
