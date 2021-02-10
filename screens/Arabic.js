import React from "react";
import { View } from "react-native";
import AnimatedFlatList from "../components/AnimatedFlatList";

export default function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, }}>
      <AnimatedFlatList />
    </View>
  );
}
