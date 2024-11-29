import React from "react";
import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";
import { globalStyles, images, imageBackground } from "@/styles/global";
import Card from "@/shared/card";

export default function ReviewDetails({ route }) {
  const { title, rating, body } = route.params;

  return (
    <ImageBackground source={imageBackground} style={globalStyles.container}>
      <Card>
        <Text>{title}</Text>
        <Text>{body}</Text>
        <View style={styles.rating}>
          <Text>Rating:</Text>
          <Image source={images.ratings[rating]} style={styles.image} />
        </View>
      </Card>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginBottom: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
