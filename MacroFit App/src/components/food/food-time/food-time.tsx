import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useTailwind } from "tailwind-rn";
import {
  useNavigation,
} from "@react-navigation/native";

export const FoodTime = ({ meal }: { meal: MealTime }) => {
  const tw = useTailwind();
   const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={tw(
        "flex flex-row justify-between w-full h-auto mt-2 rounded border-white border-2 mb-2"
      )}
      onPress={() =>
        navigation.navigate("OpenFood")
      }
    >
      <View style={tw("flex flex-col py-2")}>
        <Text style={tw("ml-4 mb-2 text-white text-xl")}>{meal.name}</Text>
        <View style={tw("flex flex-row")}>
          <Text style={tw("ml-4 text-white text-lg")}>P: {meal.protein} g</Text>
          <Text style={tw("ml-4 text-white text-lg")}>C: {meal.carbs} g</Text>
          <Text style={tw("ml-4 text-white text-lg")}>F: {meal.fats} g</Text>
        </View>
      </View>
      <View style={tw("flex h-full justify-center items-center w-1/2")}>
        <Text style={tw("text-white text-2xl")}>{meal.calories} kcal</Text>
      </View>
    </TouchableOpacity>
  );
};
