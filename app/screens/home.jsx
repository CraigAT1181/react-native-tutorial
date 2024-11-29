import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { globalStyles, imageBackground } from "../../styles/global";
import Card from "@/shared/card";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Final Fantasy VIII",
      rating: 5,
      body: "Brilliant game!",
      key: "1",
    },
    {
      title: "Starfield",
      rating: 1,
      body: "Wouldn't touch it again!",
      key: "2",
    },
    { title: "Dragon's Dogma", rating: 3, body: "Wait for a sale!", key: "3" },
  ]);

  return (
    <ImageBackground source={imageBackground} style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Review Details", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </ImageBackground>
  );
}
