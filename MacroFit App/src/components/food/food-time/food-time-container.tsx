import React from "react";
import { View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { FoodTime } from "./food-time";

interface MealTime {
  id: string;
  name: string;
  protein: number;
  carbs: number;
  fats: number;
  calories: number;
}

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
