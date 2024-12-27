import React, { useState } from "react";
import { Surface, Menu, Divider, Button } from "react-native-paper";
import { ScrollView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useLocalSearchParams } from "expo-router";
import ProgressBars from "./progress-bar";
import MealTimeHeader from "./meal-time-header";
import MealTimeContent from "./meal-time-content/meal-time-content";

const OpenFood = () => {
  const tw = useTailwind();
  const { mealId } = useLocalSearchParams();


  const randomMeal: MealTime = {
    id: "1",
    name: "Breakfast",
    protein: 25,
    carbs: 45,
    fats: 15,
    calories: 415,
  };

  return (
    <View style={tw("h-full w-full bg-black items-center")}>
      <View style={tw("w-full h-16")}>
        <ProgressBars
          actualCalories={2000}
          totalCalories={2000}
          actualProtein={10.58}
          totalProtein={130}
          actualCarbs={170}
          totalCarbs={180}
          actualFat={35}
          totalFat={80}
        ></ProgressBars>
      </View>
      <View style={tw("w-full h-fit")}>
        <MealTimeHeader meal={randomMeal}></MealTimeHeader>
        <MealTimeContent/>
      </View>
    </View>
  );
};

export default OpenFood;