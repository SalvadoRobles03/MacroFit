import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { FoodTime } from "./food-time";

export const FoodTimeContainer = ({ meals }: { meals: MealTime[] }) => {
  const tw = useTailwind();
  return (
    <View
      style={tw("flex flex-col justify-between w-[95%] mt-6 rounded h-fit")}
    >
      {meals.map((meal) => (
        <FoodTime key={meal.id} meal={meal} />
      ))}
    </View>
  );
};
