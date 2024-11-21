import React from "react";
import { View, Text } from "react-native";
import { useTailwind } from "tailwind-rn";

export const FoodTimeContainer = () => {
  const tw = useTailwind();
  return (
    <View style={tw("flex flex-col justify-between bg-red-500 w-[95%] mt-6 rounded h-fit")}>
      <Text>Hola</Text>
    </View>
  );
};
