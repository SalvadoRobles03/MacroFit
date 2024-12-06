import React, { useState } from "react";
import { Surface } from "react-native-paper";
import { ScrollView, Text, View } from "react-native";
import { useTailwind } from "tailwind-rn";
import { useLocalSearchParams } from "expo-router";
import ProgressBars from "./progress-bar";

const OpenFood = () => {
  const tw = useTailwind();
  const { mealId } = useLocalSearchParams();

  return (
    <Surface style={tw("h-full w-full bg-black items-center")}>
      <View style={tw("w-full h-fit")}>
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
    </Surface>
  );
};

export default OpenFood;
