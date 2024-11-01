import React from "react";
import { View, Text } from "react-native";
import FoodPage from "@/src/pages/food/food-page";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FoodPage/>
    </View>
  );
}
