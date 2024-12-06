import { View } from "react-native";
import * as React from "react";
import { Surface } from "react-native-paper";
import { useTailwind } from "tailwind-rn";
import { ProgressBar, Text } from "react-native-paper";

interface ProgressBarsProps {
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  actualCalories: number;
  actualProtein: number;
  actualCarbs: number;
  actualFat: number;
}

const ProgressBars: React.FC<ProgressBarsProps> = ({
  totalCalories,
  totalProtein,
  totalCarbs,
  totalFat,
  actualCalories,
  actualProtein,
  actualCarbs,
  actualFat,
}) => {
    const tw = useTailwind();
   const proteinProgress = Number((actualProtein / totalProtein).toFixed(1));
   const carbsProgress = Number((actualCarbs / totalCarbs).toFixed(1));
   const fatProgress = Number((actualFat / totalFat).toFixed(1));

  return (
    <Surface style={tw("flex flex-row pl-8")}>
      <View style={tw("w-1/4 mr-8")}>
        <View style={tw("h-6 w-full justify-center items-center")}>
          <Text style={tw("text-white")}>Protein</Text>
        </View>
        <ProgressBar
          progress={proteinProgress}
          style={tw("w-full rounded")}
          color="#1cc4d4"
        ></ProgressBar>
        <View style={tw("h-6 w-full justify-center items-center")}>
          <Text style={tw("text-white text-xs")}>
            {totalProtein - actualProtein} Left
          </Text>
        </View>
      </View>
      <View style={tw("w-1/4 mr-8")}>
        <View style={tw("h-6 w-full justify-center items-center")}>
          <Text style={tw("text-white")}>Carbs</Text>
        </View>
        <ProgressBar
          progress={carbsProgress}
          style={tw("w-full")}
          color="#d6c694"
        ></ProgressBar>
        <View style={tw("h-6 w-full justify-center items-center")}>
          <Text style={tw("text-white text-xs")}>
            {totalCarbs - actualCarbs} Left
          </Text>
        </View>
      </View>
      <View style={tw("w-1/4")}>
        <View style={tw("h-6 w-full justify-center items-center")}>
          <Text style={tw("text-white")}>Fat</Text>
        </View>
        <ProgressBar
          progress={fatProgress}
          style={tw("w-full")}
          color="#b55e02"
        ></ProgressBar>
        <View style={tw("h-6 w-full justify-center items-center")}>
          <Text style={tw("text-white text-xs")}>
            {totalFat - actualFat} Left
          </Text>
        </View>
      </View>
    </Surface>
  );
};
export default ProgressBars;
