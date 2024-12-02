import React from "react";
import { Surface } from "react-native-paper";
import { ScrollView, Text } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useLocalSearchParams } from "expo-router";

const OpenFood = () => {
  const tw = useTailwind();
  const { mealId } = useLocalSearchParams();

  return (
    <Surface style={tw("h-full w-full bg-black items-center")}>
      <Text style={tw("text-white")}>Meal ID: {mealId}</Text>
    </Surface>
  );
};

export default OpenFood;
