import React from "react";
import { View, Text } from "react-native";
import { Surface } from "react-native-paper";
import tw from "tailwind-react-native-classnames";
import CircularProgress from "react-native-circular-progress-indicator";
import ProgressGraphs from "./progress-graphs";


const FoodMainPage = () => {
  return (
    <Surface
      style={tw`h-full w-full bg-black`}
    >
      <ProgressGraphs actualCalories={100} actualProtein={100} actualCarbs={100} actualFat={100} totalCalories={100} totalProtein={100} totalCarbs={100} totalFat={100} />
    </Surface>
  );
};

export default FoodMainPage;
