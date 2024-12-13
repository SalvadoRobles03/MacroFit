import { View } from "react-native";
import { Text } from "react-native-paper";
import * as React from "react";

import { useTailwind } from "tailwind-rn";

const MealTimeHeader = ({ meal }: { meal: MealTime }) => {
  const tw = useTailwind();
  return (
    <View style={tw("")}>
      <Text style={tw("text-white")}>{meal.name}</Text>
      <Text style={tw("text-white")}>{meal.protein}</Text>
      <Text style={tw("text-white")}>{meal.carbs}</Text>
      <Text style={tw("text-white")}>{meal.fats}</Text>
      <Text style={tw("text-white")}>{meal.calories}</Text>
    </View>
  );
};

export default MealTimeHeader;
